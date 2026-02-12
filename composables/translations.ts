export type Locale = 'en' | 'es'

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Hero / HeroTwo
    'hero.title':
      'Grow with a modern point of sale – and payments that perfectly integrate.',
    'hero.getStarted': 'Get started',
    'hero.contactSales': 'Contact sales',
    'hero.valueProp1': 'Payments and point of sale, unified',
    'hero.valueProp2': 'Pricing that adjusts as your business grows',
    'hero.valueProp3': 'Free point of sale, inventory, and reporting tools',
    'hero.valueProp4': 'Sell in person or online with checkout links',

    // PropsVertical
    'propsVertical.heading': 'Run your business with all your tools — together',
    'propsVertical.doMoreTitle': 'Do more with one system',
    'propsVertical.doMoreBody':
      'Accept card payments and manage sales on a single platform. Your free point of sale helps you sell, manage payments, track performance, and more, so you can save time on day-to-day operations.',
    'propsVertical.payLessTitle': 'Pay less as you grow',
    'propsVertical.payLessBody':
      'Your rates adjust automatically based on your monthly sales — no contracts or surprises — so the price you pay keeps up with your business.',

    // PropsHorizontal
    'propsHorizontal.heading': 'Solutions designed to boost your business',
    'propsHorizontal.stayFocusedTitle': 'Stay focused on what matters',
    'propsHorizontal.stayFocusedBody':
      "Cut down on steps and mistakes with software designed to be easy to use and intuitive to learn. With one system controlling your business, you'll get to spend more time with your customers.",
    'propsHorizontal.reachCustomersTitle': 'Reach customers wherever they are',
    'propsHorizontal.reachCustomersBody':
      'Accept payments from anywhere in the country by sending customers a secure payment link.',

    // Hardware
    'hardware.heading': 'Start taking payments with Square, powered by dLocal',
    'hardware.kushkiWithPrinter': 'Kushki UltraP (with printer)',
    'hardware.kushkiWithoutPrinter': 'Kushki Ultra (without Printer)',
    'hardware.smartPos': 'Smart POS on Android OS',
    'hardware.free5G':
      'Free 5G data connectivity for the first 10 months*',
    'hardware.magneticChipNfc': 'Magnetic stripe, Chip & Pin, and NFC',

    // Testimonial
    'testimonial.quote':
      'Trusted by millions. Square powers payments and point of sale for businesses of all sizes in Mexico and around the world.',

    // MobileApp
    'mobileApp.title': 'Try Square on your mobile device',
    'mobileApp.subtitle': 'Download and explore the app to get started.',
    'mobileApp.scanLabel': 'Scan to get started',
    'mobileApp.ios': 'iOS',
    'mobileApp.android': 'Android',

    // Pricing
    'pricing.title': 'Pricing that adapts as your business grows',
    'pricing.description':
      'One simple rate for all cards, with automatic discounts as your monthly sales increase. No monthly fees. No contracts. No surprises.',
    'pricing.getStarted': 'Get started',
    'pricing.processingFees': 'Processing fees:',
    'pricing.footerTitle': 'Direct and transparent pricing',
    'pricing.footerDisclaimer':
      'Your processing rate automatically adjusts based on your monthly sales volume. Discounted rates apply starting the following month once a tier is reached. The money will be settled the next business day through the linked bank account',
    'pricing.tier1': 'Tier 1',
    'pricing.tier2': 'Tier 2',
    'pricing.tier3': 'Tier 3',
    'pricing.range1': 'Less than $30,000',
    'pricing.range2': '$30,000 - $100,000',
    'pricing.range3': '$100,000 - $300,000',
    'pricing.range4': '$300,000 or More',
    'pricing.fee': '3.45% + IVA',
    'pricing.fee2': '3.20% + IVA',
    'pricing.fee3': '2.99% + IVA',
    'pricing.fee4': '2.79% + IVA',

    // FAQ
    'faq.heading': 'FAQ',
    'faq.q1': 'How do I start accepting payments with Square?',
    'faq.q2': 'How do I connect my devices?',
    'faq.q3': 'How do I take my first payment?',
    'faq.q4': 'Why is Square hardware different in other countries?',
    'faq.q5': 'How much does Square POS software cost?',
    'faq.q6': 'How do dynamic processing fees work?',
    'faq.q7': 'What happens if a customer files a chargeback?',
    'faq.q8': 'How can I issue a refund?',
    'faq.q9': 'How do I get an invoice for processing fees?',
    'faq.q10': 'When and where do I receive my money?',
    'faq.q11': 'What types of cards can I accept with Square?',
    'faq.q12': 'Which printers work best with Square?',
    'faq.q13': 'Need more help?',
    'faq.a1': `<ul>
        <li>Go to <a href="https://squareup.com/mx/es" target="_blank" rel="noopener noreferrer" class="faq__link">https://squareup.com/mx/es</a> and select Mexico as your country.</li>
        <li>Once you're in your Dashboard, look for the black setup banner and click "Start" to begin identity verification with dLocal.</li>
        <li>Complete the process by uploading the required documentation and add your CLABE to receive deposits.</li>
        <li>Once approved, you can start accepting card payments with Square, powered by dLocal.</li>
      </ul>`,

    // LeadGen
    'leadGen.heading':
      'Bring your point of sale and your payments together',
    'leadGen.getStarted': 'Get started',
    'leadGen.contactSales': 'Contact sales',

    // Nav
    'nav.businessTypes': 'Business types',
    'nav.products': 'Products',
    'nav.pricing': 'Pricing',
    'nav.hardware': 'Hardware',
    'nav.whatsNew': "What's New",
    'nav.signIn': 'Sign in',
    'nav.support': 'Support',

  },
  es: {
    // Hero / HeroTwo
    'hero.title':
      'Crece con un punto de venta moderno y pagos que se integran perfectamente.',
    'hero.getStarted': 'Comenzar',
    'hero.contactSales': 'Contactar ventas',
    'hero.valueProp1': 'Pagos y punto de venta, unificados',
    'hero.valueProp2': 'Precios que crecen contigo',
    'hero.valueProp3':
      'Punto de venta, inventario y reportes gratuitos',
    'hero.valueProp4':
      'Vende en persona o en línea',

    // PropsVertical
    'propsVertical.heading':
      'Administra tu negocio con todas tus herramientas — juntas',
    'propsVertical.doMoreTitle': 'Haz más con un solo sistema',
    'propsVertical.doMoreBody':
      'Acepta pagos con tarjeta y administra ventas en una sola plataforma. Tu punto de venta gratuito te ayuda a vender, gestionar pagos, dar seguimiento al rendimiento y más, para que ahorres tiempo en el día a día.',
    'propsVertical.payLessTitle': 'Paga menos mientras creces',
    'propsVertical.payLessBody':
      'Tus tarifas se ajustan automáticamente según tus ventas mensuales — sin contratos ni sorpresas — para que el precio se mantenga al ritmo de tu negocio.',

    // PropsHorizontal
    'propsHorizontal.heading':
      'Soluciones diseñadas para impulsar tu negocio',
    'propsHorizontal.stayFocusedTitle': 'Enfócate en lo que importa',
    'propsHorizontal.stayFocusedBody':
      'Reduce pasos y errores con software fácil de usar e intuitivo. Con un solo sistema controlando tu negocio, pasarás más tiempo con tus clientes.',
    'propsHorizontal.reachCustomersTitle':
      'Llega a tus clientes donde sea que estén',
    'propsHorizontal.reachCustomersBody':
      'Acepta pagos desde cualquier parte del país enviando a tus clientes un enlace de pago seguro.',

    // Hardware
    'hardware.heading':
      'Empieza a recibir pagos con Square, con tecnología de dLocal',
    'hardware.kushkiWithPrinter': 'Kushki UltraP (con impresora)',
    'hardware.kushkiWithoutPrinter': 'Kushki Ultra (sin impresora)',
    'hardware.smartPos': 'POS inteligente con Android OS',
    'hardware.free5G':
      'Conectividad 5G gratuita los primeros 10 meses*',
    'hardware.magneticChipNfc':
      'Banda magnética, chip y PIN, y NFC',

    // Testimonial
    'testimonial.quote':
      'Con la confianza de millones. Square impulsa los pagos y el punto de venta para negocios de todos los tamaños en México y en el mundo.',

    // MobileApp
    'mobileApp.title': 'Prueba Square en tu dispositivo móvil',
    'mobileApp.subtitle':
      'Descarga y explora la app para comenzar.',
    'mobileApp.scanLabel': 'Escanea para comenzar',
    'mobileApp.ios': 'iOS',
    'mobileApp.android': 'Android',

    // Pricing
    'pricing.title':
      'Precios que se adaptan al crecimiento de tu negocio',
    'pricing.description':
      'Una tarifa sencilla para todas las tarjetas, con descuentos automáticos al aumentar tus ventas mensuales. Sin cuotas mensuales. Sin contratos. Sin sorpresas.',
    'pricing.getStarted': 'Comenzar',
    'pricing.processingFees': 'Comisión por transacción:',
    'pricing.footerTitle': 'Precios directos y transparentes',
    'pricing.footerDisclaimer':
      'Tu comisión se ajusta automáticamente según el volumen de ventas mensuales. Las tarifas con descuento aplican a partir del mes siguiente una vez alcanzado el nivel. El dinero se liquida el día hábil siguiente a la cuenta bancaria vinculada',
    'pricing.tier1': 'Nivel 1',
    'pricing.tier2': 'Nivel 2',
    'pricing.tier3': 'Nivel 3',
    'pricing.range1': 'Menos de $30,000',
    'pricing.range2': '$30,000 - $100,000',
    'pricing.range3': '$100,000 - $300,000',
    'pricing.range4': '$300,000 o más',
    'pricing.fee': '3.45% + IVA',
    'pricing.fee2': '3.20% + IVA',
    'pricing.fee3': '2.99% + IVA',
    'pricing.fee4': '2.79% + IVA',

    // FAQ
    'faq.heading': 'Preguntas frecuentes',
    'faq.q1': '¿Cómo empiezo a aceptar pagos con Square?',
    'faq.q2': '¿Cómo conecto mis dispositivos?',
    'faq.q3': '¿Cómo recibo mi primer pago?',
    'faq.q4': '¿Por qué el hardware de Square es distinto en otros países?',
    'faq.q5': '¿Cuánto cuesta el software POS de Square?',
    'faq.q6': '¿Cómo funcionan las comisiones dinámicas?',
    'faq.q7': '¿Qué pasa si un cliente hace un contracargo?',
    'faq.q8': '¿Cómo puedo hacer un reembolso?',
    'faq.q9': '¿Cómo obtengo una factura por las comisiones?',
    'faq.q10': '¿Cuándo y dónde recibo mi dinero?',
    'faq.q11': '¿Qué tipos de tarjetas puedo aceptar con Square?',
    'faq.q12': '¿Qué impresoras funcionan mejor con Square?',
    'faq.q13': '¿Necesitas más ayuda?',
    'faq.a1': `<ul>
        <li>Entra a <a href="https://squareup.com/mx/es" target="_blank" rel="noopener noreferrer" class="faq__link">https://squareup.com/mx/es</a> y selecciona México como tu país.</li>
        <li>En tu Panel de control, busca el banner negro de configuración y haz clic en "Comenzar" para iniciar la verificación de identidad con dLocal.</li>
        <li>Completa el proceso subiendo la documentación requerida y agrega tu CLABE para recibir depósitos.</li>
        <li>Una vez aprobado, podrás empezar a aceptar pagos con tarjeta con Square, con tecnología de dLocal.</li>
      </ul>`,

    // LeadGen
    'leadGen.heading':
      'Une tu punto de venta y tus pagos',
    'leadGen.getStarted': 'Comenzar',
    'leadGen.contactSales': 'Contactar ventas',

    // Nav
    'nav.businessTypes': 'Tipos de negocio',
    'nav.products': 'Productos',
    'nav.pricing': 'Precios',
    'nav.hardware': 'Hardware',
    'nav.whatsNew': 'Novedades',
    'nav.signIn': 'Iniciar sesión',
    'nav.support': 'Soporte',
  },
}
