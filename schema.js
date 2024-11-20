// Create the JSON-LD data
const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": ["Bilal Eljihani", "HackerJacke"],
    "image": "img/avatar.png",
    "jobTitle": ["Pentester", "Ethical Hacker", "Cybersecurity Enthusiast"],
    "description": "Bilal Eljihani, known by his alias HackerJacke, is a cybersecurity expert with a focus on ethical hacking, penetration testing, and security innovation. He works on various cybersecurity tools, including his personal project CuraCMS, and aims to elevate security standards. Bilal is also dedicated to the educational side of cybersecurity, helping others learn and grow in the field.",
    "url": "https://bilaleljhani.me",
    "sameAs": [
      "https://github.com/hackerjacke440",
      "https://www.instagram.com/real_hackerjacke_c0p4t7",
      "https://x.com/HackerJackec0p4",
      "https://www.linkedin.com/in/bilal-eljihani-19b896216/"
    ],
    "birthDate": "1999-01-01"
  };
  
  // Create the <script> element
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(jsonLdData);
  
  // Append the <script> element to the <head> of the HTML document
  document.head.appendChild(script);
  