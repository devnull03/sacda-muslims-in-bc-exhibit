<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_FORM_ACCESS_KEY } from "$env/static/public";
  import { onMount } from "svelte";

  //   let { form }: { form: ActionData } = $props();

  let email: string = $state("");
  let subject: string = $state("");
  let message: string = $state("");
  let honeypot: string | undefined = $state();

  onMount(() => {
    console.log($page.url.href);
  });
</script>

<svelte:head>
  <title>Contact | South Asian Muslims in BC</title>
</svelte:head>

<main class="bg-secondary-yellow flex flex-col pt-20 gap-20 md:my-20">
  <div
    class="md:px-32 px-6 md:flex-row flex-col flex justify-between gap-12 *:md:w-1/2"
  >
    <section class="flex flex-col gap-4">
      <h1
        class="text-primary-blue text-h2 font-source-serif-4 font-bold leading-[1.5]"
      >
        Contact Us
      </h1>
      <p>
        Whether you have inquiries about the exhibit, suggestions for
        improvement, or would like to share your own story or perspective, we’d
        love to hear from you.
        <br />
        <br />

        Please use the contact form to the right to get in touch with us and
        we’ll do our best to respond promptly.
        <br />
        <br />

        Alternatively, you can also reach us at:
        <br />
        Email: <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a>
        <br />
        Phone: <a href="tel:+16048544547">(604) 854-4547</a>
        <br />
        Address:
        <a href="https://maps.app.goo.gl/bHXFioLNt51ueBsPA">
          South Asian Studies Institute<br />
          Building K, University of the Fraser Valley<br />
          33844 King Road, Abbotsford, BC V2S 7M8
        </a>
      </p>
    </section>

    <!-- <form
      method="POST"
      class="flex flex-col gap-4 lg:w-[40vw] bg-primary-blue p-10 rounded-lg"
      action="https://api.staticforms.xyz/submit"
      onsubmit={async (e: SubmitEvent) => {
        e.preventDefault();
        const data = {
          email: email,
          subject: subject,
          honeypot: honeypot,
          message: message,
          replyTo: "@",
          accessKey: PUBLIC_FORM_ACCESS_KEY,
        };

        fetch("https://api.staticforms.xyz/submit", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success) {
              alert("Message sent successfully!");
            } else {
              alert("Message failed to send.");
            }
          })
          .catch((error) => {
            alert(error);
          });
      }}
    >
      <div>
        <label for="subject">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="your email here..."
          bind:value={email}
        />
      </div>

      <div>
        <label for="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="subject..."
          bind:value={subject}
        />
      </div>
      <input
        bind:value={honeypot}
        type="text"
        name="honeypot"
        style="display:none"
      />

      <div>
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="message..."
          class="h-[30vh]"
          bind:value={message}
        ></textarea>
      </div>

      <input type="hidden" name="replyTo" value="@" />
      <input type="hidden" name="redirectTo" value={$page.url.href} />
      <input type="hidden" name="accessKey" value={PUBLIC_FORM_ACCESS_KEY} />

      <button
        type="submit"
        value="Submit"
        class="cursor-pointer bg-black text-white w-min px-10 py-2 rounded-2xl self-end"
      >
        Send
      </button>
    </form> -->

    <iframe
      src="https://us4.list-manage.com/contact-form?u=3c616907ab5cf63924a62f942&form_id=4627a6a210f05fa92ff0c5b25b1f44f9"
      frameborder="0"
      title="Contact form"
      class="min-h-[50vh] w-full h-[90vh] rounded-lg"
    ></iframe>
  </div>

  <div
    class="bg-[url('/pattern.svg')] min-h-32 w-full bg-repeat-x overflow-hidden"
  >
    &nbsp;
  </div>
</main>

<!-- <style type="postcss">
  form div {
    @apply flex flex-col gap-2;
  }

  form label {
    @apply text-white;
  }

  input,
  textarea {
    @apply bg-gray-50 p-2 rounded-lg outline-none placeholder:text-sm;
  }
</style> -->
