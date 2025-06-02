// ========== GLOBAL FUNCTION DEFINITIONS ==========

function getLanguageDisplayText(lang) {
  const languages = {
    en: 'ENGLISH',
    zh: '中文',
    ja: '日本語',
    tl: 'FILIPINO',
    ita: 'ITALIAN',
    id: 'INDONESIAN',
    spa: 'SPANISH'
  };
  return languages[lang] || 'ENGLISH';
}

function updateLanguageDisplay(lang) {
  const displayElement = document.querySelector('.current-language');
  if (displayElement) {
    displayElement.textContent = getLanguageDisplayText(lang);
  }
}

function updateAllContent() {
  // Update regular text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18next.t(key);
  });

  // Update navigation elements
  document.querySelectorAll('[data-i18n-nav]').forEach(el => {
    const key = el.getAttribute('data-i18n-nav');
    el.textContent = i18next.t(key);
  });

  // Update HTML content elements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = i18next.t(key);
  });
}

// Make sure it's called after DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  updateAllContent();
});


function switchLanguage(lang) {
  i18next.changeLanguage(lang)
    .then(() => {
      updateAllContent();
      sessionStorage.setItem('selectedLanguage', lang);
      updateLanguageDisplay(lang);
      closeLanguageDropdown();
    })
    .catch(err => console.error('Language switch failed:', err));
}

function closeLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  if (dropdown) dropdown.classList.remove('show');
}

// ========== MAIN INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', function() {
  const savedLang = sessionStorage.getItem('selectedLanguage') || 'en';

  // Call fetchTranslationsFromScript to load the translations
  fetchTranslationsFromScript().then(combinedTranslations => {
    // Initialize i18next with the fetched translations
    i18next.init({
      lng: savedLang,
      debug: true,
      resources: combinedTranslations,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      parseMissingKeyHandler: (key) => {
        console.warn(`Missing translation for: ${key}`);
        return key;
      }
    }).then(() => {
      updateAllContent();
      updateLanguageDisplay(savedLang);
      setupLanguageDropdown();
    })
    .catch(err => console.error('Initialization failed:', err));
  });
});


  // ========== REVISED FETCH FUNCTION ==========
  async function fetchTranslationsFromScript() {
    // nav + trend2025
  const url = 'https://script.google.com/macros/s/AKfycbwopZZPnGLUhV1h7iphP-sCfvXcw9Vfn21Xt4eMoDnBG1M2nTiK3hPj-J-Jfc1Lphy9/exec'; 

  try {
    const response = await fetch(url);
    const translations = await response.json();

    console.log('Fetched Translations:', translations);
    return translations;

  } catch (error) {
    console.error('Error fetching translations:', error);
    return {};
  }
}


  // Setup the language dropdown behavior
function setupLanguageDropdown() {
  // Language selection: Handle language switching
  document.querySelectorAll('.language-dropdown a').forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      const lang = this.getAttribute('onclick').match(/'([^']+)'/)[1]; // Extract language code from onclick
      if (lang) switchLanguage(lang); // Call switchLanguage to change the language
      closeLanguageDropdown(); // Close the dropdown after selection
    });
  });

  // Dropdown toggle: Open/close the dropdown when the button is clicked
  const switcher = document.querySelector('.language-button');
  if (switcher) {
    switcher.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event from bubbling up to document
      const dropdown = document.getElementById('languageDropdown');
      if (dropdown) dropdown.classList.toggle('show'); // Toggle dropdown visibility
    });
  }

  // Close the dropdown when clicking outside
  document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('languageDropdown');
    const switcher = document.querySelector('.language-button');
    if (!dropdown.contains(e.target) && !switcher.contains(e.target)) {
      closeLanguageDropdown(); // Close dropdown if clicking outside
    }
  });
}

// Close the dropdown if it's open
function closeLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  if (dropdown) dropdown.classList.remove('show');
}

