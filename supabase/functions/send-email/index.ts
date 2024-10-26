import React from "npm:react@18.3.1";
import { Webhook } from "https://esm.sh/standardwebhooks@1.0.0";
import { renderAsync } from "npm:@react-email/components@0.0.22";
import { MagicLinkEmail } from "./_templates/magic-link.tsx";

const hookSecret = Deno.env.get("SEND_EMAIL_HOOK_SECRET") as string;
const postmarkAPI = Deno.env.get("POSTMARK_API_KEY") as string;

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("not allowed", { status: 400 });
  }

  const payload = await req.text();
  console.log("PAYLOAD");
  console.log(payload);

  const headers = Object.fromEntries(req.headers.entries());
  console.log("REQ.HEADERS.ENTRIES()");
  console.log(req.headers.entries());

  const wh = new Webhook(hookSecret);

  try {
    const {
      user,
      email_data,
    } = wh.verify(payload, headers) as {
      user: {
        email: string;
      };
      email_data: {
        token: string;
        token_hash: string;
        redirect_to: string;
        email_action_type: string;
        site_url: string;
        token_new: string;
        token_hash_new: string;
      };
    };

    console.log("EMAIL_DATA");
    console.log(email_data);

    const { token, token_hash, redirect_to, email_action_type } = email_data;

    const html = await renderAsync(
      React.createElement(MagicLinkEmail, {
        supabase_url: Deno.env.get("SUPABASE_URL") ?? "",
        token,
        token_hash,
        redirect_to,
        email_action_type,
      }),
    );

    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": postmarkAPI,
      },
      body: JSON.stringify({
        "From": "20210109@aloe.ulima.edu.pe",
        "To": user.email,
        "Subject": "Eduyacha | Código de verificación",
        "TextBody": "Correo de verificación",
        "HtmlBody": html,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw Error(data);
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: {
          http_code: error.code,
          message: error.message,
        },
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const responseHeaders = new Headers();
  responseHeaders.set("Content-Type", "application/json");
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: responseHeaders,
  });
});
