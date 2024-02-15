import Script from "next/script";

export const EventStructuredData = () => {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "EducationEvent",
            name: "HackUPC 2024",
            alternateName: "Hack UPC",
            about: [
              "Hackathon",
              "Hacker",
              "Student",
              "University",
              "Collage",
              "Programming",
              "Coding",
              "Developers",
              "Technology",
              "UPC",
              "Barcelona",
              "Spain",
            ],
            description:
              "HackUPC is the first student hackathon in Spain. This will be our tenth edition, apart from coding we also have lots of side activities to learn new technologies, meet interesting people and have fun. Come make history with us!",
            startDate: "2024-05-03",
            endDate: "2024-05-05",
            eventStatus: "EventScheduled",
            url: "https://hackupc.com/",
            eventAttendanceMode: "OfflineEventAttendanceMode ",
            location: {
              "@type": "Place",
              name: "UPC's North Campus FIB",
              address: {
                streetAddress:
                  "Edifici B6 del Campus Nord, C/Jordi Girona, 1-3",
                addressLocality: "Barcelona",
                postalCode: "08034",
                addressRegion: "Barcelona",
              },
            },
            potentialAction: {
              "@type": "RegisterAction",
              target: "https://my.hackupc.com/",
            },
            image: "https://hackupc.com/ogimage.png?v=2024",
            maximumAttendeeCapacity: 500,
            isAccessibleForFree: true,
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "EUR",
              url: "https://my.hackupc.com/",
              validFrom: "2024-05-03",
              validThrough: "2024-05-05",
              availability: "InStock",
            },
            typicalAgeRange: "14-30",
            inLanguage: "en",
            organizer: {
              "@type": "Organization",
              url: "https://hackersatupc.org/",
              name: "Hackers@UPC",
              email: "contact@hackupc.com",
            },
            performer: {
              "@type": "Organization",
              url: "https://hackersatupc.org/",
              name: "Hackers@UPC",
              email: "support@hackersatupc.org",
            },
            mainEntityOfPage: "https://hackupc.com/",
            sponsor: [
              {
                "@type": "Organization",
                name: "FIB",
                url: "https://fib.upc.com/",
              },
              {
                "@type": "Organization",
                name: "UPC",
                url: "https://upc.edu/",
              },
            ],
          }),
        }}
      />
    </>
  );
};
