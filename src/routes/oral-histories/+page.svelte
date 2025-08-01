<script lang="ts">
  import { base } from "$app/paths";
  import { interviews } from "$lib/content/interviews.content";
  import { PUBLIC_DOMAIN } from "$env/static/public";
  import { Play } from "@lucide/svelte";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import { generateBreadcrumbSchema } from "$lib/utils/breadcrumb-schema";

  const breadcrumbs = [
    { name: "Home", url: `https://${PUBLIC_DOMAIN}/` },
    { name: "Community Oral Histories", url: `https://${PUBLIC_DOMAIN}/oral-histories` }
  ];
</script>

<svelte:head>
  <title>Community Oral Histories - South Asian Canadian Muslims in BC</title>
  <meta
    name="description"
    content="Explore personal stories and oral histories from South Asian Canadian Muslims across British Columbia. Discover narratives of migration, community building, religious practice, and cultural preservation through in-depth video interviews."
  />
  <meta
    name="keywords"
    content="oral histories, South Asian Canadian Muslims BC, Muslim community stories, immigration narratives, cultural heritage interviews, British Columbia Muslims, community voices, personal testimonies"
  />
  <meta
    name="author"
    content="South Asian Studies Institute, University of the Fraser Valley"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Community Oral Histories - South Asian Canadian Muslims in BC"
  />
  <meta
    property="og:description"
    content="Explore personal stories and oral histories from South Asian Canadian Muslims across British Columbia. Discover narratives of migration, community building, and cultural preservation."
  />
  <meta property="og:image" content="{base}/content/2021_08_01_040.jpg" />
  <meta property="og:url" content="https://{PUBLIC_DOMAIN}/oral-histories" />
  <meta property="og:site_name" content="South Asian Canadian Muslims in BC" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Community Oral Histories - South Asian Canadian Muslims in BC"
  />
  <meta
    name="twitter:description"
    content="Explore personal stories and oral histories from South Asian Canadian Muslims across British Columbia. Discover narratives of migration, community building, and cultural preservation."
  />
  <meta name="twitter:image" content="{base}/content/2021_08_01_040.jpg" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://{PUBLIC_DOMAIN}/oral-histories" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Community Oral Histories - South Asian Canadian Muslims in BC",
      "description": "A collection of oral history interviews with South Asian Canadian Muslims in British Columbia, documenting their experiences, community building, and cultural heritage.",
      "url": "https://${PUBLIC_DOMAIN}/oral-histories",
      "mainEntity": {
        "@type": "ItemList",
        "name": "Oral History Interviews",
        "description": "Video interviews with community members sharing their stories",
        "numberOfItems": ${interviews.length},
        "itemListElement": [
          ${interviews
            .map(
              (interview, index) => `{
            "@type": "VideoObject",
            "position": ${index + 1},
            "name": "${interview.name} - Community Oral History",
            "description": "${interview.shortDescription}",
            "url": "https://${PUBLIC_DOMAIN}/oral-histories/${interview.id}",
            "thumbnailUrl": {
              "@type": "ImageObject",
              "url": "${interview.thumbnailUrl}",
              "caption": "${interview.name}'s interview thumbnail",
              "description": "${interview.name} sharing their story from the South Asian Canadian Muslim community in BC"
            },
            "contentLocation": {
              "@type": "Place",
              "name": "${interview.location}"
            }
          }`
            )
            .join(",")}
        ]
      },
      "isPartOf": [
        {
          "@type": "DigitalDocument",
          "name": "Community Life",
          "description": "Community narratives and contemporary profiles from South Asian Canadian Muslims in BC",
          "url": "https://${PUBLIC_DOMAIN}/oral-histories"
        },
        {
          "@type": "DigitalDocument",
          "name": "South Asian Canadian Muslims in BC - Digital Exhibit",
          "url": "https://${PUBLIC_DOMAIN}"
        }
      ],
      "author": {
        "@type": "Organization",
        "name": "South Asian Studies Institute",
        "url": "https://www.ufv.ca/sasi/"
      }
    }
  </script>`}

  <!-- Breadcrumb Schema -->
  {@html `<script type="application/ld+json">
    ${generateBreadcrumbSchema(breadcrumbs)}
  </script>`}
</svelte:head>

<main class="container px-4 py-32">
  <Breadcrumb items={[{ name: "Oral Histories", current: true }]} />

  <section class="mb-16">
    <h1 class="page-title">Community Oral Histories</h1>
    <p class="text-lg mb-8">
      Discover the rich tapestry of stories from South Asian Canadian Muslims across
      British Columbia . These oral histories capture personal journeys,
      community milestones, and cultural experiences that have shaped the Muslim
      Canadian experience in BC . Through these narratives, we gain insight into
      how religious identity , cultural heritage , and immigration experiences
      have contributed to the vibrant fabric of our province.

      <br /> <br />
      <span class="italic">
        If you are also interested in sharing your history please <a
          href="{base}/contact">contact us</a
        >
        at <a href="mailto:sasi@ufv.ca">sasi@ufv.ca</a>
      </span>
    </p>
  </section>

  <!-- Interview Grid -->
  <section>
    <div class="card-container">
      {#each interviews as interview}
        <a
          href="{base}/oral-histories/{interview.id}"
          class="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 no-underline!"
        >
          <div class="relative aspect-video">
            <img
              src={interview.thumbnailUrl}
              alt={`${interview.name}'s interview thumbnail - ${interview.title} sharing their story from the South Asian Canadian Muslim community in BC`}
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="rounded-full bg-white p-3">
                <Play />
              </div>
            </div>
          </div>

          <div class="p-5">
            <h3 class="text-xl font-semibold mb-1 text-left">
              {interview.name}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 text-left">
              {interview.title} | {interview.location}
            </p>
            <p class="text-sm line-clamp-3">{interview.shortDescription}</p>
          </div>
        </a>
      {/each}
    </div>
  </section>
</main>
