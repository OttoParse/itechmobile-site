import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Headphones,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  User,
  Wrench,
  X,
} from 'lucide-react'
import './styles.css'

const BLUE = '#13a8d6'

const heroSlides = [
  {
    eyebrow: 'ACESSÓRIOS DE SMARTPHONE',
    title: 'Acessórios de\nSmartphone',
    text: 'Somos uma empresa focada na comercialização de acessórios e gadgets para dispositivos móveis.',
    button: 'VER LOJA',
    href: '#produtos',
    image: 'https://images.unsplash.com/photo-1752832902114-825ca9c530d7?auto=format&fit=crop&q=82&w=1800',
    alt: 'Smartphone, carregador e acessórios',
  },
  {
    eyebrow: 'ASSISTÊNCIA TÉCNICA',
    title: 'Reparação de\nTelemóveis',
    text: 'Fazemos a reparação do teu smartphone quer seja uma avaria a nível de software ou física.',
    button: 'SAIBA MAIS',
    href: '#reparacao',
    image: 'https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&q=82&w=1800',
    alt: 'Técnico a reparar smartphone',
  },
]

const menuGroups = [
  {
    title: 'Componentes',
    items: ['ICs', 'Main Flex', 'Sub-placas'],
  },
  {
    title: 'Acessórios',
    items: ['Capas', 'Películas de proteção', 'Protectores Display', 'Carcasas', 'Pilhas', 'Suportes', 'Cabos e Carregadores', 'Smartwatch', 'Stylus pens', 'Auriculares s/fios', 'Carregadores', 'Bolsas', 'Correias', 'Apple', 'Apple Watch'],
  },
  {
    title: 'Outros',
    items: ['Smartphones', 'IQOS', 'IOT / Smart', 'Carregadores para carro', 'Periféricos e Tecnologia'],
  },
]

const categoryCards = [
  { title: 'Capas', subtitle: 'Proteção para smartphone', icon: Smartphone },
  { title: 'Películas', subtitle: 'Proteção de ecrã', icon: ShieldCheck },
  { title: 'Cabos e Carregadores', subtitle: 'Energia e conectividade', icon: PackageCheck },
  { title: 'Componentes', subtitle: 'Peças e eletrónica', icon: Wrench },
  { title: 'Smartphones', subtitle: 'Equipamentos móveis', icon: Smartphone },
  { title: 'Smartwatch', subtitle: 'Tecnologia wearable', icon: Clock3 },
]

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="ITechmobile">
      <span className="brand-itm">ITM</span>
      <span className="brand-name">itechmobile</span>
    </a>
  )
}

function App() {
  const [slide, setSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500)
    return () => clearInterval(id)
  }, [])

  const currentSlide = heroSlides[slide]

  const closeOverlays = () => {
    setSearchOpen(false)
    setAccountOpen(false)
    setWishlistOpen(false)
    setCartOpen(false)
  }

  const changeSlide = (direction) => {
    setSlide((s) => (s + direction + heroSlides.length) % heroSlides.length)
  }

  const productCountText = useMemo(() => '0 items 0.00€', [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="topline">
          <div className="container topline-inner">
            <span>Reparação e acessórios de smartphones</span>
            <div className="topline-links">
              <a href="tel:+351919376277">+351 919 376 277</a>
              <a href="mailto:geral@itechmobile.pt">geral@itechmobile.pt</a>
            </div>
          </div>
        </div>

        <div className="container header-main">
          <Brand />

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>Home</a>
            <div className="nav-products" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button type="button" className="nav-link-button" onClick={() => setProductsOpen((v) => !v)}>
                Produtos <ChevronDown size={14} />
              </button>
              {productsOpen && (
                <div className="mega-menu">
                  {menuGroups.map((group) => (
                    <div key={group.title}>
                      <strong>{group.title}</strong>
                      {group.items.map((item) => <a href="#produtos" key={item}>{item}</a>)}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a href="#reparacao" onClick={() => setMenuOpen(false)}>Simular Reparação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Nós</a>
            <a href="#contactos" onClick={() => setMenuOpen(false)}>Contactos</a>
          </nav>

          <div className="header-actions">
            <button type="button" aria-label="Pesquisar" onClick={() => setSearchOpen(true)}><Search size={20} /></button>
            <button type="button" aria-label="Login" onClick={() => setAccountOpen(true)}><User size={20} /><span className="desktop-label">Login / Register</span></button>
            <button type="button" aria-label="Wishlist" onClick={() => setWishlistOpen(true)}><Heart size={20} /><span className="badge">0</span></button>
            <button type="button" aria-label="Carrinho" onClick={() => setCartOpen(true)}><ShoppingBag size={20} /><span className="desktop-label">{productCountText}</span></button>
            <button type="button" className="mobile-menu" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-slider">
          {heroSlides.map((item, index) => (
            <div className={`hero-slide ${slide === index ? 'active' : ''}`} key={item.title}>
              <div className="hero-image-wrap">
                <img src={item.image} alt={item.alt} className="hero-image" />
                <div className="hero-wash" />
              </div>
              <div className="container hero-content">
                <div className="hero-card">
                  <span className="hero-eyebrow">{item.eyebrow}</span>
                  <h1>{item.title.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</h1>
                  <p>{item.text}</p>
                  <a className="primary-btn" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>{item.button}</a>
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="slider-arrow prev" aria-label="Anterior" onClick={() => changeSlide(-1)}><ChevronLeft /></button>
          <button type="button" className="slider-arrow next" aria-label="Seguinte" onClick={() => changeSlide(1)}><ChevronRight /></button>
          <div className="slider-dots">
            {heroSlides.map((_, index) => <button key={index} type="button" aria-label={`Slide ${index + 1}`} className={index === slide ? 'active' : ''} onClick={() => setSlide(index)} />)}
          </div>
        </section>

        <section className="benefit-strip">
          <div className="container benefit-grid">
            <article><PackageCheck /><div><strong>Entrega Rápida</strong><span>Serviço simples e eficiente</span></div></article>
            <article><ShieldCheck /><div><strong>Pagamentos Seguros</strong><span>Segurança nas operações</span></div></article>
            <article><Headphones /><div><strong>Assistência</strong><span>Estamos disponíveis para ajudar</span></div></article>
          </div>
        </section>

        <section id="produtos" className="section products-section">
          <div className="container">
            <div className="section-title center">
              <span>AS NOSSAS TENDÊNCIAS</span>
              <h2>MAIS POPULARES</h2>
            </div>
            <div className="category-grid">
              {categoryCards.map(({ title, subtitle, icon: Icon }) => (
                <a href="#loja" className="category-card" key={title}>
                  <div className="category-icon"><Icon size={34} strokeWidth={1.5} /></div>
                  <div><strong>{title}</strong><span>{subtitle}</span></div>
                  <ChevronRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="repair-feature">
          <img src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&q=82&w=1800" alt="Reparação de smartphone em laboratório" />
          <div className="repair-overlay" />
          <div className="container repair-content">
            <span>REPARAÇÕES DE EQUIPAMENTOS</span>
            <h2>Laboratório de assistência técnica</h2>
            <p>Dispomos de um laboratório de assistência técnica com técnicos permanentes, efetuamos em média 70% das reparações no próprio dia.</p>
            <a className="primary-btn" href="#reparacao">SOLICITAR REPARAÇÃO</a>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="container about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?auto=format&fit=crop&q=82&w=1200" alt="Técnico de reparação" />
            </div>
            <div className="about-copy">
              <span className="kicker">SOBRE NÓS</span>
              <h2>Reparação e acessórios de smartphones</h2>
              <p>Fundada em novembro de 2022, estamos empenhados em fornecer um serviço de alta qualidade e eficiente aos nossos clientes.</p>
              <p>Trabalhamos desde substituições de ecrãs e baterias até reparações complexas em placas eletrónicas, procurando sempre uma solução rápida e eficaz.</p>
              <a className="text-link" href="#contactos">CONTACTAR <ChevronRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="loja" className="section shop-section">
          <div className="container">
            <div className="section-title center">
              <span>OS MAIS RECENTES</span>
              <h2>NOVIDADES</h2>
            </div>
            <div className="empty-shop">
              <ShoppingBag size={44} strokeWidth={1.3} />
              <strong>Catálogo sem produtos publicados</strong>
              <p>É assim que a loja pública está atualmente. Mantemos a estrutura pronta para voltar a publicar produtos quando quiseres.</p>
            </div>
          </div>
        </section>

        <section id="contactos" className="section contact-section">
          <div className="container contact-layout">
            <div className="contact-info">
              <span className="kicker">CONTACTOS</span>
              <h2>Fala connosco</h2>
              <div className="contact-list">
                <a href="tel:+351919376277"><Phone /><div><strong>Telefone</strong><span>+351 919 376 277</span><small>Chamada para rede móvel nacional</small></div></a>
                <a href="tel:+351256037480"><Phone /><div><strong>Telefone fixo</strong><span>+351 256 037 480</span><small>Chamada para rede fixa nacional</small></div></a>
                <a href="mailto:geral@itechmobile.pt"><Mail /><div><strong>Email</strong><span>geral@itechmobile.pt</span></div></a>
                <div><MapPin /><div><strong>Onde Estamos</strong><span>Avenida do Brasil, 675<br />3700-072 S. João da Madeira</span></div></div>
              </div>
            </div>
            <form className="contact-form" name="contacto" method="POST" data-netlify="true" onSubmit={() => setFormSent(true)}>
              <input type="hidden" name="form-name" value="contacto" />
              <label>Nome*<input name="nome" required /></label>
              <label>Email*<input type="email" name="email" required /></label>
              <label>Telefone*<input name="telefone" required /></label>
              <label>Mensagem<textarea name="mensagem" rows="5" /></label>
              <label className="privacy-check"><input type="checkbox" required /> <span>Li e aceito a Política de Privacidade</span></label>
              <button className="primary-btn" type="submit">ENVIAR MENSAGEM</button>
              {formSent && <small className="form-note">No Netlify, este formulário ficará disponível em Forms.</small>}
            </form>
          </div>
          <div className="container map-wrap">
            <iframe
              title="ITechmobile em S. João da Madeira"
              src="https://www.google.com/maps?q=Avenida%20do%20Brasil%20675,%203700-072%20S%C3%A3o%20Jo%C3%A3o%20da%20Madeira,%20Portugal&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><Brand /><p>Reparação e acessórios de smartphones.</p></div>
          <div><strong>CONTACTOS</strong><a href="tel:+351919376277">+351 919 376 277</a><a href="mailto:geral@itechmobile.pt">geral@itechmobile.pt</a><span>Avenida do Brasil, S. João da Madeira</span></div>
          <div><strong>LINKS ÚTEIS</strong><a href="https://itechmobile.pt/politica-de-privacidade/" target="_blank" rel="noreferrer">Política de Privacidade</a><a href="https://itechmobile.pt/termos-e-condicoes/" target="_blank" rel="noreferrer">Termos e Condições</a><a href="https://itechmobile.pt/centro-de-arbitragem/" target="_blank" rel="noreferrer">Centro de Arbitragem</a></div>
        </div>
        <div className="container footer-bottom">ITechmobile | Todos os direitos reservados</div>
      </footer>

      <button type="button" className="chat-button" onClick={() => setChatOpen((v) => !v)} aria-label="Abrir conversa"><Phone size={22} /></button>
      {chatOpen && <div className="chat-box"><button type="button" onClick={() => setChatOpen(false)}><X size={16} /></button><strong>Olá, podemos ajudar?</strong><p>Fala connosco por WhatsApp.</p><a href="https://wa.me/351919376277" target="_blank" rel="noreferrer">INICIAR CONVERSA</a></div>}

      {searchOpen && <div className="overlay" onMouseDown={closeOverlays}><div className="modal search-modal" onMouseDown={(e) => e.stopPropagation()}><button className="close-btn" onClick={closeOverlays}><X /></button><Search size={28} /><h3>Pesquisar produtos</h3><input autoFocus placeholder="O que procura?" /><div className="search-tags">{categoryCards.map((c) => <a href="#produtos" key={c.title} onClick={closeOverlays}>{c.title}</a>)}</div></div></div>}

      {accountOpen && <div className="overlay" onMouseDown={closeOverlays}><div className="modal account-modal" onMouseDown={(e) => e.stopPropagation()}><button className="close-btn" onClick={closeOverlays}><X /></button><h3>Login / Register</h3><div className="account-columns"><form onSubmit={(e) => e.preventDefault()}><strong>Login</strong><input placeholder="Username ou email" /><input type="password" placeholder="Password" /><button className="primary-btn">ENTRAR</button></form><form onSubmit={(e) => e.preventDefault()}><strong>Register</strong><input placeholder="Username" /><input type="email" placeholder="Email" /><input type="password" placeholder="Password" /><button className="outline-btn">REGISTAR</button></form></div><small>Esta janela replica a área de conta. A autenticação real pode depois ser ligada ao Supabase.</small></div></div>}

      {wishlistOpen && <div className="drawer-layer" onMouseDown={closeOverlays}><aside className="drawer" onMouseDown={(e) => e.stopPropagation()}><button className="close-btn" onClick={closeOverlays}><X /></button><Heart size={30} /><h3>Wishlist</h3><p>A tua lista de desejos está vazia.</p></aside></div>}

      {cartOpen && <div className="drawer-layer" onMouseDown={closeOverlays}><aside className="drawer" onMouseDown={(e) => e.stopPropagation()}><button className="close-btn" onClick={closeOverlays}><X /></button><ShoppingBag size={30} /><h3>Shopping cart</h3><p>O teu carrinho está vazio.</p><a className="primary-btn" href="#produtos" onClick={closeOverlays}>VOLTAR À LOJA</a></aside></div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
