// SmileMaxer.com — minimal i18n layer
// Supported languages: en (default), es, pt, ja.
// Picks the language from the browser/OS (navigator.language) and falls back
// to English. There is no on-site picker — language follows device settings,
// like Google.
// Translates any element with [data-i18n="key"] and any attribute via
// [data-i18n-attr="attr:key,attr2:key2"]. Keys are namespaced so a single
// dictionary works across every page.

(function () {
  "use strict";

  var SUPPORTED = ["en", "es", "pt", "ja"];

  var T = {
    en: {
      // Nav + footer (shared)
      "nav.home": "Home",
      "nav.about": "About",
      "nav.support": "Support",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.eula": "EULA",
      "nav.get_app": "Get the app",
      "nav.menu_label": "Menu",
      "nav.lang_label": "Language",
      "footer.note": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer is the home of the PerioMaxer app.",
      "footer.note_index": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer is the home of the PerioMaxer app. PerioMaxer is not affiliated with Apple Inc.",
      "footer.note_min": "© <span id=\"year\"></span> Max Mendelson",

      // Index — meta
      "index.meta_title": "SmileMaxer — Voice-powered periodontal charting",
      "index.meta_desc": "SmileMaxer is home to PerioMaxer, a voice-powered, on-device periodontal charting app for dental professionals on iOS and macOS.",
      "index.og_desc": "PerioMaxer lets dental pros chart perio exams hands-free. On-device, encrypted, built for iPhone, iPad & Mac.",

      // Index — hero
      "index.hero_chip": "Now on the App Store · iOS & macOS",
      "index.hero_title_html": "Chart perio exams <span class=\"accent\">hands-free.</span>",
      "index.hero_sub_html": "<strong>PerioMaxer</strong> is a voice-powered periodontal charting app built for dentists, hygienists, and periodontists. Records stay encrypted on your device. Dictate probing depths, bleeding, mobility, and more — your hands stay on the instruments, not the keyboard.",
      "index.hero_cta_primary": "Get on the App Store",
      "index.hero_cta_secondary": "See how it works",
      "index.hero_meta_1": "🔒 Fully on-device",
      "index.hero_meta_2": "🎙️ Voice-first",
      "index.hero_meta_3": "📱 iPhone · iPad · Mac",
      "index.hero_float_1": "“4, 3, 3, bleeding”",
      "index.hero_float_2": "Smart filtering on",
      "index.hero_screen_alt": "PerioMaxer welcome screen",

      // Index — features
      "index.features_chip": "Built for the op",
      "index.features_title": "Everything you need, nothing you don’t.",
      "index.features_sub": "Designed from the chair — not a spreadsheet.",
      "index.f1_title": "Voice charting",
      "index.f1_body": "Call out probing depths, gingival margins, bleeding on probing, furcation, and mobility. PerioMaxer writes it down while you work.",
      "index.f2_title": "Encrypted on-device",
      "index.f2_body": "Records are encrypted and stored locally on your device. No cloud sync, no third-party servers, no surprises.",
      "index.f3_title": "Smart filtering",
      "index.f3_body": "The recognizer ignores side conversations and only commits dental commands — so “did you see the game?” doesn’t end up in the chart.",
      "index.f4_title": "PDF export",
      "index.f4_body": "Generate clean, printable periodontal reports for patient records and referrals in a single tap.",
      "index.f5_title": "Meds & conditions",
      "index.f5_body": "Built-in drug and ICD-10 indexes let you attach medications and conditions to each patient quickly and accurately.",
      "index.f6_title": "Full perio coverage",
      "index.f6_body": "Six sites per tooth, upper and lower arches, missing-tooth handling, plus bleeding, suppuration, and mobility indicators.",

      // Index — shots
      "index.shots_chip": "From the app",
      "index.shots_title": "A look inside PerioMaxer.",
      "index.shots_sub": "Built in SwiftUI with a glass interface that reads clearly in any operatory light.",
      "index.shots_cap_1": "Welcome",
      "index.shots_cap_2": "Voice charting",
      "index.shots_cap_3": "Fast manual entry",
      "index.shots_alt_2": "PerioMaxer charting view",
      "index.shots_alt_3": "PerioMaxer charting detail",

      // Index — pricing
      "index.pricing_chip": "Simple pricing",
      "index.pricing_title": "A cup of coffee a month.",
      "index.pricing_sub_html": "Every plan starts with a <strong>free 1-week trial</strong>. Cancel anytime, no questions.",
      "index.pricing_monthly_label": "Monthly",
      "index.pricing_monthly_period": "/ month",
      "index.pricing_monthly_eff": "$3.99 / mo",
      "index.pricing_annual_badge": "Best value",
      "index.pricing_annual_label": "Annual",
      "index.pricing_annual_period": "/ year",
      "index.pricing_annual_eff_html": "Just <strong>$2.08 / mo</strong> — save 48%",
      "index.pricing_semi_label": "6 months",
      "index.pricing_semi_period": "/ 6 mo",
      "index.pricing_semi_eff": "$2.50 / mo — save 37%",
      "index.pricing_perk_all": "Everything in PerioMaxer",
      "index.pricing_perk_voice": "Unlimited voice charting",
      "index.pricing_perk_pdf": "PDF export",
      "index.pricing_cta": "Start free week",
      "index.pricing_note": "No ads. No data sold. No cloud accounts. Just the app.",

      // Index — closing CTA
      "index.cta_chip": "1 week free on every plan",
      "index.cta_title": "Stop typing between probes.",
      "index.cta_body": "PerioMaxer is in the App Store now. Try it free for a week on iPhone, iPad, or Mac — no commitment, cancel anytime.",
      "index.cta_secondary": "Meet the maker",

      // Index — clinical disclaimer
      "index.disclaimer_label": "Clinical use",
      "index.disclaimer_body": "PerioMaxer is a documentation aid built for licensed dental professionals. It is not a medical device, is not FDA-cleared, and is not intended for diagnosis or treatment. Voice recognition and data entry can produce errors; the licensed clinician is responsible for verifying every recorded value and remains the responsible party for the official chart of record.",

      // Index — FAQ
      "index.faq_chip": "Questions",
      "index.faq_title": "Frequently asked.",
      "index.faq_sub": "Quick answers about how PerioMaxer fits into your operatory.",
      "index.faq_q1": "Is PerioMaxer a medical device?",
      "index.faq_a1": "No. PerioMaxer is a documentation aid for licensed dental professionals. It is not FDA-cleared and is not intended for diagnosis, treatment, or any decision-support role. Voice recognition can produce errors, so the clinician must verify every recorded value before relying on it as the chart of record.",
      "index.faq_q2": "Does PerioMaxer work offline?",
      "index.faq_a2": "Yes. After the App Store install completes, PerioMaxer needs no internet to chart, save records, or export PDFs. Voice recognition uses Apple's on-device speech framework, so dictation also works in airplane mode and inside operatories with no Wi-Fi.",
      "index.faq_q3": "Where is patient data stored?",
      "index.faq_a3": "Only on your device. Records are encrypted with AES-256-GCM and the keys live in the Apple Keychain. Nothing is uploaded, synced, or backed up to any server — not by PerioMaxer, not by a third party. Apple's StoreKit handles subscription verification locally.",
      "index.faq_q4": "Which Apple devices does PerioMaxer support?",
      "index.faq_a4": "PerioMaxer is a universal Apple app that runs on iPhone, iPad, and Mac. One subscription covers all your devices signed into the same Apple ID. Voice charting works across the lineup, including Apple Silicon Macs through Designed for iPad.",
      "index.faq_q5": "What can I dictate hands-free?",
      "index.faq_a5": "PerioMaxer recognizes the full periodontal exam vocabulary: probing depths at six sites per tooth, gingival margins, bleeding on probing, suppuration, plaque, furcation involvement, and tooth mobility. The recognizer ignores side conversations and only commits dental commands.",
      "index.faq_q6": "Can I export periodontal charts as PDF?",
      "index.faq_a6": "Yes. PerioMaxer generates clean, printable PDF reports for patient records and referrals in a single tap. Exports are produced on-device and saved through the standard iOS / macOS share sheet — no cloud round-trip.",
      "index.faq_q7": "What happens if my PerioMaxer subscription lapses?",
      "index.faq_a7": "Existing records stay on your device. Some features may be restricted until a subscription is active again, but nothing is deleted automatically and no data leaves the device. Subscriptions can be managed entirely in the App Store.",
      "index.faq_q8": "Does PerioMaxer collect analytics, crash reports, or sell any data?",
      "index.faq_a8": "No. PerioMaxer integrates with no analytics platform, no crash reporting service, and no advertising network. There are no trackers and no data is sold or shared. The only third-party interaction is with Apple's App Store for subscription billing.",

      // About
      "about.meta_title": "About · SmileMaxer",
      "about.meta_desc": "Meet Max Mendelson, the maker behind PerioMaxer and SmileMaxer — a student-engineer working at the crossroads of dentistry and technology.",
      "about.chip": "Maker",
      "about.sub": "Student, builder, and researcher working where dentistry meets software.",
      "about.bio_1_html": "Hi, I’m Max — the maker behind <strong>PerioMaxer</strong> and SmileMaxer. I’m a student at the University of Maryland with a long-running obsession for using technology to solve real clinical problems.",
      "about.bio_2_html": "Over the past few years I’ve been lucky enough to work on research projects that sit right at the intersection of biology and computing — applying <strong>3D modeling</strong>, <strong>3D animation</strong>, and <strong>3D printing</strong> to dental and medical questions alongside faculty at the School of Dentistry. That work is what ultimately pushed me toward building PerioMaxer: I kept watching clinicians lose time at the keyboard when their hands belonged on the instruments.",
      "about.bio_3_html": "PerioMaxer is my attempt to give that time back. It’s a voice-first periodontal charting tool that stays entirely on-device, so patient data never leaves the operatory. I’m building it independently, designing it in SwiftUI, and iterating with feedback from practicing hygienists and periodontists.",
      "about.bio_4_html": "When I’m not coding I’m usually printing something, animating something, or overthinking the edge cases of something. If any of that overlaps with what you’re working on, I’d love to hear from you.",
      "about.interest_research": "Research",
      "about.interest_3d_print": "3D Printing",
      "about.interest_3d_anim": "3D Animation",
      "about.interest_3d_model": "3D Modeling",
      "about.interest_dental": "Dental Tech",
      "about.interest_swift": "Swift / iOS",
      "about.interest_ml": "ML & Voice",
      "about.interest_umd": "UMD Student",
      "about.cta_chip": "About the app",
      "about.cta_title": "Try PerioMaxer yourself.",
      "about.cta_body": "A week free on every plan — see why the app was built in the first place.",
      "about.cta_primary": "Back to the app",
      "about.cta_secondary": "More projects on GitHub",

      // Support
      "support.meta_title": "Support · SmileMaxer",
      "support.meta_desc": "Get help with PerioMaxer. Reach out to Max directly by email for support, bug reports, or feature requests.",
      "support.chip": "Support",
      "support.title": "Need a hand?",
      "support.sub": "Questions, bug reports, feature requests — they all come straight to me.",
      "support.intro": "PerioMaxer is built and supported by one person. If something isn’t working, you have a question about using the app, or you’d like to request a feature, please reach out directly:",
      "support.email_btn": "Email maxethis@gmail.com",
      "support.email_html": "You can also copy the address manually: <strong>maxethis@gmail.com</strong>. I usually reply within a day or two. When reporting a problem, it helps to include your device (iPhone, iPad, or Mac), the iOS/macOS version you’re on, and a short description of what you were doing when the issue happened.",
      "support.bug_h": "What to include in a bug report",
      "support.bug_1": "Device and OS version",
      "support.bug_2": "PerioMaxer version (found in Settings inside the app)",
      "support.bug_3": "Steps to reproduce, if you can",
      "support.bug_4": "Screenshots or a short screen recording if it’s visual",
      "support.feature_h": "Feature requests",
      "support.feature_body": "Tell me what you wish PerioMaxer did. Real clinical workflows beat hypothetical ones, so specifics about how you’d use the feature are gold.",
      "support.billing_h": "Billing and subscriptions",
      "support.billing_html": "Subscriptions are managed by Apple through your App Store account. For refunds or to cancel, open <strong>Settings → [your name] → Subscriptions</strong> on iOS, or <strong>App Store → your profile → Subscriptions</strong> on Mac. If you run into trouble there, email me and I’ll do what I can to help.",

      // Legal pages (chrome only — markdown body stays in English)
      "legal.chip": "Legal",
      "legal.loading": "Loading document…",
      "legal.note": "The official document below is provided in English.",
      "privacy.meta_title": "Privacy Policy · SmileMaxer",
      "privacy.meta_desc": "Privacy Policy for the PerioMaxer app by SmileMaxer. On-device, encrypted data handling — nothing leaves your device.",
      "privacy.title": "Privacy Policy",
      "privacy.sub": "How PerioMaxer handles your data — spoiler: it stays on your device.",
      "terms.meta_title": "Terms of Service · SmileMaxer",
      "terms.meta_desc": "Terms of Service for the PerioMaxer app by SmileMaxer.",
      "terms.title": "Terms of Service",
      "terms.sub": "The rules of the road for using PerioMaxer and this site.",
      "eula.meta_title": "EULA · SmileMaxer",
      "eula.meta_desc": "End User License Agreement for the PerioMaxer app by SmileMaxer.",
      "eula.title": "End User License Agreement",
      "eula.sub": "The terms that govern your use of the PerioMaxer app.",

      // 404
      "nf.meta_title": "Not found · SmileMaxer",
      "nf.title": "This page wandered off.",
      "nf.body": "The link might be old, or the page moved. Head back home — everything still works from there.",
      "nf.primary": "Back home",
      "nf.secondary": "About the maker"
    },

    es: {
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.support": "Soporte",
      "nav.privacy": "Privacidad",
      "nav.terms": "Términos",
      "nav.eula": "EULA",
      "nav.get_app": "Obtener la app",
      "nav.menu_label": "Menú",
      "nav.lang_label": "Idioma",
      "footer.note": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer es el hogar de la app PerioMaxer.",
      "footer.note_index": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer es el hogar de la app PerioMaxer. PerioMaxer no está afiliado a Apple Inc.",
      "footer.note_min": "© <span id=\"year\"></span> Max Mendelson",

      "index.meta_title": "SmileMaxer — Periodontograma por voz",
      "index.meta_desc": "SmileMaxer es el hogar de PerioMaxer, una app de periodontograma por voz, totalmente en el dispositivo, para profesionales dentales en iOS y macOS.",
      "index.og_desc": "PerioMaxer permite a los profesionales dentales registrar exámenes periodontales sin manos. En el dispositivo, encriptado, hecho para iPhone, iPad y Mac.",

      "index.hero_chip": "Ya en el App Store · iOS y macOS",
      "index.hero_title_html": "Registra exámenes periodontales <span class=\"accent\">sin manos.</span>",
      "index.hero_sub_html": "<strong>PerioMaxer</strong> es una app de periodontograma por voz pensada para dentistas, higienistas y periodoncistas. Los registros se mantienen encriptados en tu dispositivo. Dicta profundidades de sondaje, sangrado, movilidad y más — tus manos se quedan en los instrumentos, no en el teclado.",
      "index.hero_cta_primary": "Descargar en App Store",
      "index.hero_cta_secondary": "Ver cómo funciona",
      "index.hero_meta_1": "🔒 Todo en el dispositivo",
      "index.hero_meta_2": "🎙️ Por voz",
      "index.hero_meta_3": "📱 iPhone · iPad · Mac",
      "index.hero_float_1": "“4, 3, 3, con sangrado”",
      "index.hero_float_2": "Filtrado inteligente activo",
      "index.hero_screen_alt": "Pantalla de bienvenida de PerioMaxer",

      "index.features_chip": "Hecho para la consulta",
      "index.features_title": "Todo lo que necesitas, nada que no.",
      "index.features_sub": "Diseñado desde el sillón — no desde una hoja de cálculo.",
      "index.f1_title": "Registro por voz",
      "index.f1_body": "Anuncia profundidades de sondaje, márgenes gingivales, sangrado al sondaje, furcaciones y movilidad. PerioMaxer lo registra mientras trabajas.",
      "index.f2_title": "Encriptado en el dispositivo",
      "index.f2_body": "Los registros están encriptados y se guardan localmente en tu dispositivo. Sin sincronización en la nube, sin servidores de terceros, sin sorpresas.",
      "index.f3_title": "Filtrado inteligente",
      "index.f3_body": "El reconocedor ignora las conversaciones paralelas y solo registra los comandos dentales — así “¿viste el partido?” no termina en la ficha.",
      "index.f4_title": "Exportar PDF",
      "index.f4_body": "Genera informes periodontales claros e imprimibles para historiales y derivaciones con un solo toque.",
      "index.f5_title": "Medicamentos y diagnósticos",
      "index.f5_body": "Los índices integrados de medicamentos e ICD-10 te permiten asociar medicamentos y diagnósticos a cada paciente de forma rápida y precisa.",
      "index.f6_title": "Periodonto completo",
      "index.f6_body": "Seis sitios por diente, arcadas superior e inferior, manejo de dientes ausentes, además de indicadores de sangrado, supuración y movilidad.",

      "index.shots_chip": "Desde la app",
      "index.shots_title": "Un vistazo dentro de PerioMaxer.",
      "index.shots_sub": "Hecho en SwiftUI con una interfaz tipo cristal legible bajo cualquier luz de consultorio.",
      "index.shots_cap_1": "Bienvenida",
      "index.shots_cap_2": "Registro por voz",
      "index.shots_cap_3": "Entrada manual rápida",
      "index.shots_alt_2": "Vista de registro de PerioMaxer",
      "index.shots_alt_3": "Detalle de registro de PerioMaxer",

      "index.pricing_chip": "Precios sencillos",
      "index.pricing_title": "Una taza de café al mes.",
      "index.pricing_sub_html": "Cada plan empieza con <strong>1 semana de prueba gratis</strong>. Cancela cuando quieras, sin preguntas.",
      "index.pricing_monthly_label": "Mensual",
      "index.pricing_monthly_period": "/ mes",
      "index.pricing_monthly_eff": "$3.99 / mes",
      "index.pricing_annual_badge": "Mejor opción",
      "index.pricing_annual_label": "Anual",
      "index.pricing_annual_period": "/ año",
      "index.pricing_annual_eff_html": "Solo <strong>$2.08 / mes</strong> — ahorra 48 %",
      "index.pricing_semi_label": "6 meses",
      "index.pricing_semi_period": "/ 6 mes",
      "index.pricing_semi_eff": "$2.50 / mes — ahorra 37 %",
      "index.pricing_perk_all": "Todas las funciones de PerioMaxer",
      "index.pricing_perk_voice": "Registro por voz ilimitado",
      "index.pricing_perk_pdf": "Exportar PDF",
      "index.pricing_cta": "Empezar semana gratis",
      "index.pricing_note": "Sin anuncios. Sin venta de datos. Sin cuentas en la nube. Solo la app.",

      "index.cta_chip": "1 semana gratis en cada plan",
      "index.cta_title": "Deja de escribir entre sondajes.",
      "index.cta_body": "PerioMaxer ya está en el App Store. Pruébalo gratis durante una semana en iPhone, iPad o Mac — sin compromiso, cancela cuando quieras.",
      "index.cta_secondary": "Conoce al creador",

      "about.meta_title": "Acerca de · SmileMaxer",
      "about.meta_desc": "Conoce a Max Mendelson, el creador de PerioMaxer y SmileMaxer — un estudiante e ingeniero que trabaja entre la odontología y la tecnología.",
      "about.chip": "Creador",
      "about.sub": "Estudiante, creador e investigador que trabaja donde la odontología se encuentra con el software.",
      "about.bio_1_html": "Hola, soy Max — el creador detrás de <strong>PerioMaxer</strong> y SmileMaxer. Soy estudiante en la Universidad de Maryland y arrastro una vieja obsesión por usar la tecnología para resolver problemas clínicos reales.",
      "about.bio_2_html": "En los últimos años he tenido la suerte de participar en proyectos de investigación justo en la intersección entre biología y computación — aplicando <strong>modelado 3D</strong>, <strong>animación 3D</strong> e <strong>impresión 3D</strong> a problemas dentales y médicos junto al profesorado de la Facultad de Odontología. Ese trabajo es lo que finalmente me empujó a crear PerioMaxer: veía una y otra vez cómo los clínicos perdían tiempo en el teclado cuando sus manos debían estar en los instrumentos.",
      "about.bio_3_html": "PerioMaxer es mi intento de devolverles ese tiempo. Es una herramienta de periodontograma por voz que se mantiene completamente en el dispositivo, así los datos del paciente nunca salen del consultorio. La construyo de forma independiente, la diseño en SwiftUI y la mejoro con la opinión de higienistas y periodoncistas en activo.",
      "about.bio_4_html": "Cuando no estoy programando, normalmente estoy imprimiendo algo, animando algo o pensando demasiado en los casos extremos de algo. Si algo de eso se cruza con lo que estás haciendo, me encantaría que me escribieras.",
      "about.interest_research": "Investigación",
      "about.interest_3d_print": "Impresión 3D",
      "about.interest_3d_anim": "Animación 3D",
      "about.interest_3d_model": "Modelado 3D",
      "about.interest_dental": "Tecnología dental",
      "about.interest_swift": "Swift / iOS",
      "about.interest_ml": "ML y voz",
      "about.interest_umd": "Estudiante de UMD",
      "about.cta_chip": "Sobre la app",
      "about.cta_title": "Prueba PerioMaxer tú mismo.",
      "about.cta_body": "Una semana gratis en cada plan — descubre por qué se construyó esta app.",
      "about.cta_primary": "Volver a la app",
      "about.cta_secondary": "Más proyectos en GitHub",

      "support.meta_title": "Soporte · SmileMaxer",
      "support.meta_desc": "Obtén ayuda con PerioMaxer. Contacta directamente con Max por correo para soporte, reportes de errores o solicitudes de funciones.",
      "support.chip": "Soporte",
      "support.title": "¿Necesitas ayuda?",
      "support.sub": "Preguntas, reportes de errores, solicitudes de funciones — todo me llega directamente a mí.",
      "support.intro": "PerioMaxer está hecho y mantenido por una sola persona. Si algo no funciona, tienes una pregunta sobre el uso de la app o quieres pedir una función, ponte en contacto directamente:",
      "support.email_btn": "Escribir a maxethis@gmail.com",
      "support.email_html": "También puedes copiar la dirección manualmente: <strong>maxethis@gmail.com</strong>. Suelo responder en uno o dos días. Al reportar un problema, ayuda incluir tu dispositivo (iPhone, iPad o Mac), la versión de iOS/macOS y una breve descripción de lo que hacías cuando ocurrió el problema.",
      "support.bug_h": "Qué incluir en un reporte de error",
      "support.bug_1": "Dispositivo y versión del sistema",
      "support.bug_2": "Versión de PerioMaxer (en Ajustes dentro de la app)",
      "support.bug_3": "Pasos para reproducirlo, si puedes",
      "support.bug_4": "Capturas de pantalla o un breve video si es algo visual",
      "support.feature_h": "Solicitudes de funciones",
      "support.feature_body": "Cuéntame qué te gustaría que PerioMaxer hiciera. Los flujos clínicos reales valen más que los hipotéticos, así que los detalles sobre cómo usarías la función son oro.",
      "support.billing_h": "Facturación y suscripciones",
      "support.billing_html": "Las suscripciones las gestiona Apple desde tu cuenta del App Store. Para reembolsos o cancelar, abre <strong>Ajustes → [tu nombre] → Suscripciones</strong> en iOS, o <strong>App Store → tu perfil → Suscripciones</strong> en Mac. Si tienes problemas allí, escríbeme y haré lo que pueda.",

      "legal.chip": "Legal",
      "legal.loading": "Cargando documento…",
      "legal.note": "El documento oficial a continuación se proporciona en inglés.",
      "privacy.meta_title": "Política de privacidad · SmileMaxer",
      "privacy.meta_desc": "Política de privacidad de la app PerioMaxer de SmileMaxer. Manejo de datos en el dispositivo y encriptado — nada sale de tu dispositivo.",
      "privacy.title": "Política de privacidad",
      "privacy.sub": "Cómo PerioMaxer trata tus datos — spoiler: se quedan en tu dispositivo.",
      "terms.meta_title": "Términos de servicio · SmileMaxer",
      "terms.meta_desc": "Términos de servicio de la app PerioMaxer de SmileMaxer.",
      "terms.title": "Términos de servicio",
      "terms.sub": "Las reglas del camino para usar PerioMaxer y este sitio.",
      "eula.meta_title": "EULA · SmileMaxer",
      "eula.meta_desc": "Acuerdo de licencia de usuario final de la app PerioMaxer de SmileMaxer.",
      "eula.title": "Acuerdo de licencia de usuario final",
      "eula.sub": "Las condiciones que rigen el uso de la app PerioMaxer.",

      "nf.meta_title": "No encontrado · SmileMaxer",
      "nf.title": "Esta página se perdió.",
      "nf.body": "El enlace puede estar desactualizado o la página se movió. Vuelve al inicio — desde ahí todo sigue funcionando.",
      "nf.primary": "Volver al inicio",
      "nf.secondary": "Sobre el creador"
    },

    pt: {
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.support": "Suporte",
      "nav.privacy": "Privacidade",
      "nav.terms": "Termos",
      "nav.eula": "EULA",
      "nav.get_app": "Baixar o app",
      "nav.menu_label": "Menu",
      "nav.lang_label": "Idioma",
      "footer.note": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer é o lar do app PerioMaxer.",
      "footer.note_index": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer é o lar do app PerioMaxer. PerioMaxer não é afiliado à Apple Inc.",
      "footer.note_min": "© <span id=\"year\"></span> Max Mendelson",

      "index.meta_title": "SmileMaxer — Periograma por voz",
      "index.meta_desc": "SmileMaxer é o lar do PerioMaxer, um app de periograma por voz, totalmente no dispositivo, para profissionais odontológicos em iOS e macOS.",
      "index.og_desc": "PerioMaxer permite que profissionais odontológicos registrem exames periodontais sem usar as mãos. No dispositivo, criptografado, feito para iPhone, iPad e Mac.",

      "index.hero_chip": "Agora na App Store · iOS e macOS",
      "index.hero_title_html": "Faça periogramas <span class=\"accent\">sem usar as mãos.</span>",
      "index.hero_sub_html": "<strong>PerioMaxer</strong> é um app de periograma por voz feito para dentistas, higienistas e periodontistas. Os registros ficam criptografados no seu dispositivo. Dite profundidades de sondagem, sangramento, mobilidade e muito mais — suas mãos ficam nos instrumentos, não no teclado.",
      "index.hero_cta_primary": "Baixar na App Store",
      "index.hero_cta_secondary": "Ver como funciona",
      "index.hero_meta_1": "🔒 Tudo no dispositivo",
      "index.hero_meta_2": "🎙️ Por voz",
      "index.hero_meta_3": "📱 iPhone · iPad · Mac",
      "index.hero_float_1": "“4, 3, 3, com sangramento”",
      "index.hero_float_2": "Filtragem inteligente ativa",
      "index.hero_screen_alt": "Tela de boas-vindas do PerioMaxer",

      "index.features_chip": "Feito para o consultório",
      "index.features_title": "Tudo o que você precisa, nada que não.",
      "index.features_sub": "Projetado a partir da cadeira — não de uma planilha.",
      "index.f1_title": "Registro por voz",
      "index.f1_body": "Anuncie profundidades de sondagem, margens gengivais, sangramento à sondagem, furcas e mobilidade. O PerioMaxer registra enquanto você trabalha.",
      "index.f2_title": "Criptografado no dispositivo",
      "index.f2_body": "Os registros são criptografados e armazenados localmente no seu dispositivo. Sem sincronização na nuvem, sem servidores de terceiros, sem surpresas.",
      "index.f3_title": "Filtragem inteligente",
      "index.f3_body": "O reconhecedor ignora conversas paralelas e registra apenas os comandos odontológicos — então “você viu o jogo?” não vai parar na ficha.",
      "index.f4_title": "Exportar PDF",
      "index.f4_body": "Gere relatórios periodontais claros e prontos para imprimir para prontuários e encaminhamentos com um único toque.",
      "index.f5_title": "Medicamentos e diagnósticos",
      "index.f5_body": "Os índices integrados de medicamentos e CID-10 permitem associar medicamentos e diagnósticos a cada paciente com rapidez e precisão.",
      "index.f6_title": "Cobertura periodontal completa",
      "index.f6_body": "Seis sítios por dente, arcadas superior e inferior, suporte a dentes ausentes, além de indicadores de sangramento, supuração e mobilidade.",

      "index.shots_chip": "Do app",
      "index.shots_title": "Um olhar dentro do PerioMaxer.",
      "index.shots_sub": "Feito em SwiftUI com uma interface de vidro legível sob qualquer luz de consultório.",
      "index.shots_cap_1": "Boas-vindas",
      "index.shots_cap_2": "Registro por voz",
      "index.shots_cap_3": "Entrada manual rápida",
      "index.shots_alt_2": "Tela de registro do PerioMaxer",
      "index.shots_alt_3": "Detalhe de registro do PerioMaxer",

      "index.pricing_chip": "Preços simples",
      "index.pricing_title": "Um café por mês.",
      "index.pricing_sub_html": "Todo plano começa com <strong>1 semana grátis</strong>. Cancele quando quiser, sem perguntas.",
      "index.pricing_monthly_label": "Mensal",
      "index.pricing_monthly_period": "/ mês",
      "index.pricing_monthly_eff": "$3.99 / mês",
      "index.pricing_annual_badge": "Melhor opção",
      "index.pricing_annual_label": "Anual",
      "index.pricing_annual_period": "/ ano",
      "index.pricing_annual_eff_html": "Apenas <strong>$2.08 / mês</strong> — economize 48 %",
      "index.pricing_semi_label": "6 meses",
      "index.pricing_semi_period": "/ 6 meses",
      "index.pricing_semi_eff": "$2.50 / mês — economize 37 %",
      "index.pricing_perk_all": "Tudo do PerioMaxer",
      "index.pricing_perk_voice": "Registro por voz ilimitado",
      "index.pricing_perk_pdf": "Exportar PDF",
      "index.pricing_cta": "Começar semana grátis",
      "index.pricing_note": "Sem anúncios. Sem venda de dados. Sem contas na nuvem. Só o app.",

      "index.cta_chip": "1 semana grátis em todo plano",
      "index.cta_title": "Pare de digitar entre sondagens.",
      "index.cta_body": "PerioMaxer já está na App Store. Teste grátis por uma semana no iPhone, iPad ou Mac — sem compromisso, cancele quando quiser.",
      "index.cta_secondary": "Conheça o criador",

      "about.meta_title": "Sobre · SmileMaxer",
      "about.meta_desc": "Conheça Max Mendelson, criador do PerioMaxer e do SmileMaxer — estudante e engenheiro atuando no cruzamento entre odontologia e tecnologia.",
      "about.chip": "Criador",
      "about.sub": "Estudante, criador e pesquisador atuando onde a odontologia encontra o software.",
      "about.bio_1_html": "Oi, sou o Max — o criador por trás do <strong>PerioMaxer</strong> e do SmileMaxer. Sou estudante na Universidade de Maryland e tenho uma obsessão antiga por usar a tecnologia para resolver problemas clínicos reais.",
      "about.bio_2_html": "Nos últimos anos tive a sorte de trabalhar em projetos de pesquisa bem no cruzamento entre biologia e computação — aplicando <strong>modelagem 3D</strong>, <strong>animação 3D</strong> e <strong>impressão 3D</strong> a questões odontológicas e médicas junto a professores da Faculdade de Odontologia. Foi esse trabalho que acabou me empurrando a construir o PerioMaxer: eu via clínicos perderem tempo no teclado quando as mãos deveriam estar nos instrumentos.",
      "about.bio_3_html": "O PerioMaxer é minha tentativa de devolver esse tempo. É uma ferramenta de periograma por voz que permanece totalmente no dispositivo, então os dados do paciente nunca saem do consultório. Eu construo de forma independente, desenho em SwiftUI e itero com o feedback de higienistas e periodontistas em atividade.",
      "about.bio_4_html": "Quando não estou programando, geralmente estou imprimindo alguma coisa, animando alguma coisa ou pensando demais nos casos extremos de alguma coisa. Se algo disso cruzar com o que você faz, eu adoraria saber.",
      "about.interest_research": "Pesquisa",
      "about.interest_3d_print": "Impressão 3D",
      "about.interest_3d_anim": "Animação 3D",
      "about.interest_3d_model": "Modelagem 3D",
      "about.interest_dental": "Tecnologia odontológica",
      "about.interest_swift": "Swift / iOS",
      "about.interest_ml": "ML e voz",
      "about.interest_umd": "Estudante na UMD",
      "about.cta_chip": "Sobre o app",
      "about.cta_title": "Experimente o PerioMaxer.",
      "about.cta_body": "Uma semana grátis em todo plano — veja por que o app foi criado.",
      "about.cta_primary": "Voltar para o app",
      "about.cta_secondary": "Mais projetos no GitHub",

      "support.meta_title": "Suporte · SmileMaxer",
      "support.meta_desc": "Tire suas dúvidas sobre o PerioMaxer. Fale diretamente com o Max por e-mail para suporte, relatos de bugs ou pedidos de novas funções.",
      "support.chip": "Suporte",
      "support.title": "Precisa de uma mãozinha?",
      "support.sub": "Dúvidas, relatos de bugs, pedidos de funções — tudo chega direto pra mim.",
      "support.intro": "O PerioMaxer é feito e mantido por uma única pessoa. Se algo não funcionar, se tiver uma dúvida sobre o uso do app ou quiser pedir uma função, fale diretamente comigo:",
      "support.email_btn": "Enviar e-mail para maxethis@gmail.com",
      "support.email_html": "Você também pode copiar o endereço manualmente: <strong>maxethis@gmail.com</strong>. Costumo responder em um ou dois dias. Ao relatar um problema, ajuda incluir seu dispositivo (iPhone, iPad ou Mac), a versão do iOS/macOS e uma breve descrição do que você estava fazendo quando aconteceu.",
      "support.bug_h": "O que incluir em um relato de bug",
      "support.bug_1": "Dispositivo e versão do sistema",
      "support.bug_2": "Versão do PerioMaxer (em Ajustes dentro do app)",
      "support.bug_3": "Passos para reproduzir, se possível",
      "support.bug_4": "Capturas de tela ou um vídeo curto se for algo visual",
      "support.feature_h": "Pedidos de funções",
      "support.feature_body": "Conta pra mim o que você gostaria que o PerioMaxer fizesse. Fluxos clínicos reais batem hipotéticos, então detalhes de como você usaria o recurso valem ouro.",
      "support.billing_h": "Cobrança e assinaturas",
      "support.billing_html": "As assinaturas são gerenciadas pela Apple através da sua conta da App Store. Para reembolso ou cancelamento, abra <strong>Ajustes → [seu nome] → Assinaturas</strong> no iOS, ou <strong>App Store → seu perfil → Assinaturas</strong> no Mac. Se tiver problemas por lá, me mande um e-mail e eu ajudo no que puder.",

      "legal.chip": "Legal",
      "legal.loading": "Carregando documento…",
      "legal.note": "O documento oficial abaixo está em inglês.",
      "privacy.meta_title": "Política de Privacidade · SmileMaxer",
      "privacy.meta_desc": "Política de Privacidade do app PerioMaxer da SmileMaxer. Tratamento de dados no dispositivo e criptografado — nada sai do seu dispositivo.",
      "privacy.title": "Política de Privacidade",
      "privacy.sub": "Como o PerioMaxer trata seus dados — spoiler: tudo fica no seu dispositivo.",
      "terms.meta_title": "Termos de Serviço · SmileMaxer",
      "terms.meta_desc": "Termos de Serviço do app PerioMaxer da SmileMaxer.",
      "terms.title": "Termos de Serviço",
      "terms.sub": "As regras do jogo para usar o PerioMaxer e este site.",
      "eula.meta_title": "EULA · SmileMaxer",
      "eula.meta_desc": "Contrato de Licença de Usuário Final do app PerioMaxer da SmileMaxer.",
      "eula.title": "Contrato de Licença de Usuário Final",
      "eula.sub": "Os termos que regem o uso do app PerioMaxer.",

      "nf.meta_title": "Não encontrado · SmileMaxer",
      "nf.title": "Esta página se perdeu.",
      "nf.body": "O link pode estar antigo ou a página foi movida. Volte para o início — a partir de lá tudo continua funcionando.",
      "nf.primary": "Voltar para o início",
      "nf.secondary": "Sobre o criador"
    },

    ja: {
      "nav.home": "ホーム",
      "nav.about": "概要",
      "nav.support": "サポート",
      "nav.privacy": "プライバシー",
      "nav.terms": "利用規約",
      "nav.eula": "EULA",
      "nav.get_app": "アプリを入手",
      "nav.menu_label": "メニュー",
      "nav.lang_label": "言語",
      "footer.note": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer は PerioMaxer アプリの公式サイトです。",
      "footer.note_index": "© <span id=\"year\"></span> Max Mendelson · SmileMaxer は PerioMaxer アプリの公式サイトです。PerioMaxer は Apple Inc. と提携していません。",
      "footer.note_min": "© <span id=\"year\"></span> Max Mendelson",

      "index.meta_title": "SmileMaxer — 音声で操作する歯周検査チャート",
      "index.meta_desc": "SmileMaxer は PerioMaxer のホームです。iOS と macOS で動く、デバイス内で完結する音声操作の歯科医療従事者向け歯周チャートアプリです。",
      "index.og_desc": "PerioMaxer なら歯科のプロが手を使わずに歯周検査を記録できます。デバイス内で完結、暗号化、iPhone・iPad・Mac 対応。",

      "index.hero_chip": "App Store で配信中 · iOS と macOS",
      "index.hero_title_html": "歯周検査を <span class=\"accent\">ハンズフリーで記録。</span>",
      "index.hero_sub_html": "<strong>PerioMaxer</strong> は、歯科医師・歯科衛生士・歯周病専門医のための音声操作歯周チャートアプリです。記録はすべて暗号化され、デバイス内に保存されます。プロービング深さ、出血、動揺度などを声で読み上げるだけ — 手は器具に、キーボードには触れません。",
      "index.hero_cta_primary": "App Store で入手",
      "index.hero_cta_secondary": "使い方を見る",
      "index.hero_meta_1": "🔒 すべてデバイス内で完結",
      "index.hero_meta_2": "🎙️ 音声操作",
      "index.hero_meta_3": "📱 iPhone · iPad · Mac",
      "index.hero_float_1": "「4、3、3、出血」",
      "index.hero_float_2": "スマートフィルタ有効",
      "index.hero_screen_alt": "PerioMaxer のウェルカム画面",

      "index.features_chip": "診療現場のために",
      "index.features_title": "必要なものはすべて、不要なものはなし。",
      "index.features_sub": "デスクのスプレッドシートではなく、診療チェアから設計。",
      "index.f1_title": "音声チャート",
      "index.f1_body": "プロービング深さ、歯肉縁、出血、根分岐部、動揺度を声で読み上げると、PerioMaxer が作業中に記録します。",
      "index.f2_title": "デバイス内で暗号化",
      "index.f2_body": "記録は暗号化され、デバイスにローカル保存されます。クラウド同期も、サードパーティサーバーも、想定外もありません。",
      "index.f3_title": "スマートフィルタリング",
      "index.f3_body": "認識エンジンは雑談を無視し、歯科コマンドだけを記録します — 「試合観た?」がチャートに紛れ込みません。",
      "index.f4_title": "PDF エクスポート",
      "index.f4_body": "患者記録や紹介状向けに、整った印刷可能な歯周レポートをワンタップで生成。",
      "index.f5_title": "薬剤・既往歴",
      "index.f5_body": "薬剤と ICD-10 のインデックスを内蔵。患者ごとに正確かつ素早く薬剤や既往歴を紐付けられます。",
      "index.f6_title": "歯周検査を網羅",
      "index.f6_body": "1 歯あたり 6 部位、上下顎、欠損歯対応に加え、出血・排膿・動揺度の指標を完備。",

      "index.shots_chip": "アプリから",
      "index.shots_title": "PerioMaxer の中をのぞいてみよう。",
      "index.shots_sub": "SwiftUI で構築。診療室のどんな照明下でも読みやすいガラス調のインターフェース。",
      "index.shots_cap_1": "ウェルカム",
      "index.shots_cap_2": "音声チャート",
      "index.shots_cap_3": "素早い手動入力",
      "index.shots_alt_2": "PerioMaxer のチャート画面",
      "index.shots_alt_3": "PerioMaxer のチャート詳細",

      "index.pricing_chip": "シンプルな料金",
      "index.pricing_title": "コーヒー一杯分の月額。",
      "index.pricing_sub_html": "どのプランも <strong>1 週間の無料トライアル</strong> 付き。いつでもキャンセル可能、質問は一切ありません。",
      "index.pricing_monthly_label": "月額",
      "index.pricing_monthly_period": "/ 月",
      "index.pricing_monthly_eff": "$3.99 / 月",
      "index.pricing_annual_badge": "おすすめ",
      "index.pricing_annual_label": "年額",
      "index.pricing_annual_period": "/ 年",
      "index.pricing_annual_eff_html": "<strong>$2.08 / 月</strong> 相当 — 48% お得",
      "index.pricing_semi_label": "6 か月",
      "index.pricing_semi_period": "/ 6 か月",
      "index.pricing_semi_eff": "$2.50 / 月 相当 — 37% お得",
      "index.pricing_perk_all": "PerioMaxer のすべての機能",
      "index.pricing_perk_voice": "音声チャート無制限",
      "index.pricing_perk_pdf": "PDF エクスポート",
      "index.pricing_cta": "無料の 1 週間を開始",
      "index.pricing_note": "広告なし。データの販売なし。クラウドアカウントなし。あるのはアプリだけ。",

      "index.cta_chip": "全プラン 1 週間無料",
      "index.cta_title": "プロービングの合間にキーボードを打たないで。",
      "index.cta_body": "PerioMaxer は App Store で配信中。iPhone・iPad・Mac で 1 週間無料 — 縛りなし、いつでもキャンセル可能。",
      "index.cta_secondary": "開発者を見る",

      "about.meta_title": "概要 · SmileMaxer",
      "about.meta_desc": "PerioMaxer と SmileMaxer の開発者、Max Mendelson を紹介。歯科とテクノロジーの交差点で活動する学生エンジニア。",
      "about.chip": "開発者",
      "about.sub": "歯科とソフトウェアが交わる場所で活動する、学生・開発者・研究者。",
      "about.bio_1_html": "こんにちは、Max です — <strong>PerioMaxer</strong> と SmileMaxer の開発者です。メリーランド大学の学生で、テクノロジーで臨床現場の本物の問題を解決することに長年こだわってきました。",
      "about.bio_2_html": "ここ数年は幸運にも、生物学とコンピューティングの交差点に位置する研究プロジェクトに関わってきました — 歯学部の教員と一緒に <strong>3D モデリング</strong>、<strong>3D アニメーション</strong>、<strong>3D プリンティング</strong> を歯科・医療の課題に応用する仕事です。その経験こそが、PerioMaxer を作る決め手になりました — 臨床家の手が器具に必要なのに、キーボードで時間を失っている姿を何度も見たからです。",
      "about.bio_3_html": "PerioMaxer は、その失われた時間を取り戻すための私の試みです。完全にデバイス内で動く音声優先の歯周チャートツールなので、患者データは診療室から一歩も出ません。一人で開発し、SwiftUI で設計し、現役の歯科衛生士・歯周病専門医からのフィードバックで磨いています。",
      "about.bio_4_html": "コードを書いていない時は、たいてい何かを印刷したり、アニメーションを作ったり、何かのエッジケースを考えすぎたりしています。そのどれかがあなたの取り組みと重なるなら、ぜひ連絡してください。",
      "about.interest_research": "研究",
      "about.interest_3d_print": "3D プリント",
      "about.interest_3d_anim": "3D アニメーション",
      "about.interest_3d_model": "3D モデリング",
      "about.interest_dental": "歯科テック",
      "about.interest_swift": "Swift / iOS",
      "about.interest_ml": "機械学習と音声",
      "about.interest_umd": "UMD 学生",
      "about.cta_chip": "アプリについて",
      "about.cta_title": "PerioMaxer を自分で試してみる。",
      "about.cta_body": "全プラン 1 週間無料 — このアプリが生まれた理由をぜひ体験してください。",
      "about.cta_primary": "アプリに戻る",
      "about.cta_secondary": "GitHub のプロジェクトをもっと見る",

      "support.meta_title": "サポート · SmileMaxer",
      "support.meta_desc": "PerioMaxer のサポートはこちら。サポート、バグ報告、機能リクエストは Max に直接メールでどうぞ。",
      "support.chip": "サポート",
      "support.title": "お手伝いが必要ですか?",
      "support.sub": "質問、バグ報告、機能リクエスト — すべて私に直接届きます。",
      "support.intro": "PerioMaxer は一人で開発・運用しています。動かない、使い方がわからない、機能を提案したい — どんなことでも私に直接ご連絡ください:",
      "support.email_btn": "maxethis@gmail.com にメール",
      "support.email_html": "メールアドレスは手動でコピーしてもらっても構いません: <strong>maxethis@gmail.com</strong>。通常 1〜2 日以内に返信します。不具合の報告時は、デバイス (iPhone、iPad、Mac)、iOS/macOS のバージョン、発生時の操作の簡単な説明を添えていただけると助かります。",
      "support.bug_h": "バグ報告に含める内容",
      "support.bug_1": "デバイスと OS のバージョン",
      "support.bug_2": "PerioMaxer のバージョン (アプリ内の設定で確認できます)",
      "support.bug_3": "可能であれば再現手順",
      "support.bug_4": "視覚的な問題ならスクリーンショットや短い画面録画",
      "support.feature_h": "機能リクエスト",
      "support.feature_body": "PerioMaxer にどんな動きをしてほしいか教えてください。仮の話より実際の臨床ワークフローのほうが価値が高いので、その機能をどう使うかの具体例は宝物です。",
      "support.billing_h": "支払いとサブスクリプション",
      "support.billing_html": "サブスクリプションは Apple が App Store アカウント経由で管理します。返金やキャンセルは、iOS なら <strong>設定 → [あなたの名前] → サブスクリプション</strong>、Mac なら <strong>App Store → プロフィール → サブスクリプション</strong> から行えます。うまくいかない場合はメールをいただければ、できる限りサポートします。",

      "legal.chip": "規約",
      "legal.loading": "ドキュメントを読み込み中…",
      "legal.note": "以下の正式な文書は英語で提供されています。",
      "privacy.meta_title": "プライバシーポリシー · SmileMaxer",
      "privacy.meta_desc": "SmileMaxer の PerioMaxer アプリのプライバシーポリシー。データはすべてデバイス内で暗号化処理 — 端末から外に出ません。",
      "privacy.title": "プライバシーポリシー",
      "privacy.sub": "PerioMaxer がデータをどう扱うか — ネタバレ: すべて端末内に留まります。",
      "terms.meta_title": "利用規約 · SmileMaxer",
      "terms.meta_desc": "SmileMaxer の PerioMaxer アプリの利用規約。",
      "terms.title": "利用規約",
      "terms.sub": "PerioMaxer と本サイトを利用するためのルール。",
      "eula.meta_title": "EULA · SmileMaxer",
      "eula.meta_desc": "SmileMaxer の PerioMaxer アプリのエンドユーザー使用許諾契約。",
      "eula.title": "エンドユーザー使用許諾契約",
      "eula.sub": "PerioMaxer アプリの使用を規律する条件。",

      "nf.meta_title": "見つかりません · SmileMaxer",
      "nf.title": "このページはどこかへ行ってしまいました。",
      "nf.body": "リンクが古いか、ページが移動した可能性があります。ホームに戻ってください — そこからはすべて動きます。",
      "nf.primary": "ホームに戻る",
      "nf.secondary": "開発者について"
    }
  };

  function detect() {
    var langs = [];
    if (navigator.languages && navigator.languages.length) {
      langs = navigator.languages;
    } else if (navigator.language || navigator.userLanguage) {
      langs = [navigator.language || navigator.userLanguage];
    }
    for (var i = 0; i < langs.length; i++) {
      var code = (langs[i] + "").slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return "en";
  }

  function lookup(lang, key) {
    if (T[lang] && typeof T[lang][key] === "string") return T[lang][key];
    if (T.en && typeof T.en[key] === "string") return T.en[key];
    return null;
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    document.documentElement.lang = lang;

    // Text content / inner HTML
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var v = lookup(lang, key);
      if (v == null) continue;
      if (el.tagName === "TITLE") {
        el.textContent = v;
      } else {
        el.innerHTML = v;
      }
    }

    // Attributes — format "attr:key,attr2:key2"
    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var node = attrNodes[j];
      var spec = node.getAttribute("data-i18n-attr") || "";
      var pairs = spec.split(",");
      for (var k = 0; k < pairs.length; k++) {
        var bits = pairs[k].split(":");
        if (bits.length !== 2) continue;
        var attr = bits[0].trim();
        var aKey = bits[1].trim();
        var av = lookup(lang, aKey);
        if (av != null) node.setAttribute(attr, av);
      }
    }

    // Refresh year (gets wiped if its parent was re-rendered above)
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();

    document.documentElement.setAttribute("data-lang", lang);

    // Let other scripts react if they want
    try {
      document.dispatchEvent(new CustomEvent("i18n:applied", { detail: { lang: lang } }));
    } catch (e) { /* old browsers */ }
  }

  function init() {
    apply(detect());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.SmileMaxerI18n = {
    apply: apply,
    detect: detect,
    supported: SUPPORTED.slice(),
    lookup: lookup
  };
})();
