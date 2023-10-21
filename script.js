// Content translations for Kannada
const kannadaContent = {
    kannadaHeading: "ವರ್ಷಾ ಸ್ವೀಟ್ಸ್ ಅಂಡ್ ಮಾರ್ಟ್ಸ,ಕುಮಟಾ",
    englishHeading: "VARSHA SWEETS AND MARTS, KUMTA",
    navLinks: ["ಹೋಮ್", "ಮೆನೂ", "ನಮ್ಮ ಬಗ್ಗೇ", "ಸಂಪರ್ಕ"],
    heroHeading: "ವರ್ಷಾ ಸ್ವೀಟ್ಸ್ ಅಂಡ್ ಮಾರ್ಟ್ಸ, ಕುಮಟಾ",
    heroSubheading: "ನಮ್ಮ ಸಂತೋಷದಾಯಕ ಮಿಷನ್ ನಿಮಗಾಗಿ.",
    heroDescription: "ನಮ್ಮ ಸಂತೋಷದಾಯಕ ಮಿಷನ್ ನಿಮಗಾಗಿ."
    // Add translations for other sections as needed
};

// Content translations for Englishಕುಮಟಾ
const englishContent = {
    kannadaHeading: "ವರ್ಷಾ ಸ್ವೀಟ್ಸ್ ಅಂಡ್ ಮಾರ್ಟ್ಸ, ಕುಮಟಾ",
    englishHeading: "VARSHA SWEETS AND MARTS, KUMTA",
    navLinks: ["Home", "Menu", "About Us", "Contact"],
    heroHeading: "VARSHA SWEETS AND MARTS, KUMTA",
    heroSubheading: "Your source for delicious sweets and treats.",
    heroDescription: "Discover our delightful range of sweets and treats."
    // Add translations for other sections as needed
};

// Function to set the content based on the selected language
function setLanguageContent(language) {
    const content = language === "kannada" ? kannadaContent : englishContent;

    // Update the header
    document.querySelector(".kannada-heading").textContent = content.kannadaHeading;
    document.querySelector(".english-heading").textContent = content.englishHeading;

    // Update navigation links
    const navLinks = document.querySelectorAll(".nav a");
    content.navLinks.forEach((text, index) => {
        navLinks[index].textContent = text;
    });

    // Update the hero section
    document.querySelector(".hero h1").textContent = content.heroHeading;
    document.querySelector(".hero h2").textContent = content.heroSubheading;
    document.querySelector(".hero p").textContent = content.heroDescription;

    // Update other sections as needed
    // ...

    // Update the menu section (add menu items in the chosen language)
    const menuSection = document.querySelector(".menu");
    menuSection.innerHTML = `<h2>${content.menuHeading}</h2>`; // Add menu items here
}

// Add event listeners for language buttons
document.getElementById("kannada-btn").addEventListener("click", () => {
    setLanguageContent("kannada");
});

document.getElementById("english-btn").addEventListener("click", () => {
    setLanguageContent("english");
});

// Set the default language (English)
setLanguageContent("english");
