import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = "BFN Yearbook 2025 | Black Founders Network",
  description = "Celebrating 24 innovative Black founders from the 2025 BFN cohort. Explore their stories, ventures, and the impact they're making across healthcare, education, technology, and more.",
  image = "https://www.programs-bfn.ca/og-yearbook-2025.png",
  url,
  type = "website",
  keywords = "Black Founders Network, BFN, Black entrepreneurs, startup accelerator, Canadian startups, 2025 cohort, innovation, diversity in tech, Black-owned businesses",
  canonicalUrl,
}: SEOProps) => {
  const baseUrl = "https://yearbook.blackfounders.ca";
  const currentUrl = url || `${baseUrl}${window.location.pathname}`;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  const canonical = canonicalUrl || currentUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Black Founders Network" />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@bfncommunity" />
      <meta name="twitter:creator" content="@bfncommunity" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Black Founders Network" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#D1A000" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Black Founders Network",
          url: baseUrl,
          logo: `${baseUrl}/bfn.svg`,
          description: "Empowering Black Founders to Innovate and Scale",
          sameAs: [
            "https://www.linkedin.com/company/blackfoundersnetwork/",
            "https://twitter.com/bfncommunity",
            "https://www.instagram.com/bfncommunity/",
            "https://www.facebook.com/BFNcommunity/",
            "https://www.youtube.com/@BlackFoundersNetwork",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            email: "bfn@utoronto.ca",
            contactType: "Customer Service",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
