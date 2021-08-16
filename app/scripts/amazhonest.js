import { FACTS } from "./facts";
const fact = FACTS[Math.floor(Math.random() * FACTS.length)];

var banner = document.createElement("div");

var bannerTextLinkWrapper = document.createElement("div");
bannerTextLinkWrapper.style = `
  width: 100%;
  background-color: #37475a;
  text-align: center;
  padding: 10px 14px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  font-family: Arial,sans-serif;
`;

var bannerText = document.createElement("span");
bannerText.style = `
  color: #fff;
  font-weight: lighter;
  margin-right: 4px;
`;
bannerText.innerText = `Did you know? ${fact.text}`;

var bannerLink = document.createElement("a");
var bannerLinkStyle = document.createElement("style");
bannerLinkStyle.textContent = `
  .banner-link {
    text-decoration: none !important;
    color: #fff !important;
    font-weight: 400 !important;
  }

  .banner-link:hover {
    text-decoration: underline !important;
  }
`;
bannerLink.setAttribute("target", "_blank");
bannerLink.setAttribute("rel", "noopener");
bannerLink.setAttribute("href", fact.link);
bannerLink.setAttribute("class", "banner-link");
bannerLink.innerText = "Learn More";

banner.appendChild(bannerTextLinkWrapper);
bannerTextLinkWrapper.appendChild(bannerText);
bannerTextLinkWrapper.appendChild(bannerLinkStyle);
bannerTextLinkWrapper.appendChild(bannerLink);

var pageContent = document.querySelector("#pageContent");
pageContent.prepend(banner);
