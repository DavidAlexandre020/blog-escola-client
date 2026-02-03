import React from "react"
import Head from "react-helmet"
// or import Head from next/head for Next.js
import PropTypes from "prop-types"

const DOMAIN = "https://tecnodog.vercel.app"
const MAIN_KEYWORDS = "tecnodog, jogos, tech, software, tecnologia, web developer, front end, back end, chatgpt, github, free fire, marketing, digital, iphones, whatsapp, samsung, whatsapp iphones, gta6, gta5, gta4, xcloud, efootball, gta, psp, ppsspp, jogo para celular, jogo para celular,jogo para pc, fifa, ea sports FC, grand theft auto, the last of us, gamer, pc gamer, playstation, playstation 6, playstation 5, playstation 4, playstation 3 playstation 2, ps, ps6, ps5, ps4, ps3, ps2, xbox, xbox one, bluetooth, xbox one s, xbox 360, xbox 360 slim, cpu, gpu, fps, cheat, Rockstar Games, battle royale, android, app store, google play, garena, gta rp, windows, linux, ubuntu, kali, kali linux, node, nodejs, node js, javascript, react, reactjs, react js, next js, nextjs, next, sass, scss, css, html, react native, python, pip, java, cshap, c#, c++, c, mongodb, mongo db, sql, angola, angola game, mauro ff, mauroff, macos, mac os, linux mint, servidores, unix, kernel, iot, debian, fedora, tizem, placa, nvidia, rtx, msi, theme, tema, intel, asus, amd, fundo, papel, walpapers, fundo anidado, papel de parede animado, progamação, cisco systems, rede, redes, cabeamento, redes de computadores pdf, rj11, rj 11, rj45,rj 45, par trançado, fortinite, farlight84, farlight 84, tecnologia avançada, jogos eletrônicos, novidades tecnológicas, dicas de gaming, dicas de jogos, gadgets inovadores, análises de jogos, tecnologia móvel, últimas tendências tecnológicas, notícias de tecnologia, PC gamer, insade, limbo, comparativo de dispositivos, lançamentos tecnológicos, reviews de smartphones, inteligência artificial aplicada, tecnologia para o dia a dia, melhores apps de 2025, gadgets mais recentes, notícias de tecnologia 2025, novidades em tecnologia, tecnologia de ponta, jogos mais jogados 2025, jogos mais jogados, lançamentos de jogos, melhores jogos mobile, dicas Free Fire, como subir de patente Free Fire, jogos Battle Royale, análises de games, melhores jogos de tiro, novidades do mundo gamer, gameplay comentado, como escolher o melhor celular gamer, melhores configurações para jogar Free Fire, novidades tecnológicas para gamers, acessórios essenciais para streamers, top 10 jogos para Android fraco, aprender a programar, linguagens de programação 2025, tutoriais de programação, programação para iniciantes, JavaScript para web, Python passo a passo, como criar um site do zero, desenvolvimento web moderno, dicas de programação, frameworks mais usados, tecnologia e programação, desenvolvimento de jogos, como programar jogos, melhores linguagens para jogos, tecnologia para desenvolvedores, programação para gamers, reviews de gadgets para programadores, ferramentas para desenvolvimento de jogos, redes de computadores para iniciantes, tipos de redes de computadores, como funciona uma rede local (LAN), protocolos de rede explicados, TCP/IP em redes de computadores, configuração de roteadores, segurança em redes, redes domésticas vs empresariais, dicas para melhorar o Wi-Fi, certificações em redes (ex: CCNA), melhores jogos Battle Royale, Python ou JavaScript para iniciantes, criar sites com HTML e CSS, redes de computadores explicadas, como montar uma rede caseira, principais comandos de rede no terminal, como investir em criptomoedas, o que é Bitcoin, melhores criptomoedas para iniciantes, comprar cripto com segurança, como funciona a blockchain, análise técnica de criptomoedas, tendências cripto 2025, the last of us, o que é marketing digital, estratégias de marketing digital 2025, estratégias de marketing digital 2026, como atrair clientes online, tráfego pago vs tráfego orgânico, melhores ferramentas de marketing digital, como usar o Google Ads, SEO para iniciantes, funil de vendas digital, marketing de conteúdo, como ganhar dinheiro na internet, como começar no marketing digital com baixo investimento, estratégias de tráfego pago para afiliados, como criar campanhas no Facebook Ads, melhores nichos para marketing digital em 2025, melhores nichos para marketing digital em 2026, automação de marketing com ferramentas gratuitas, como montar um funil de vendas com e-mail marketing"

const DEFAULT_IMAGE_CARD = "https://ik.imagekit.io/5o4rx22ub/feature.png"
const DEFAULT_TITLE = "Tecnodog"
const DEFAULT_DESCRIPTION = "Tecnodog, o seu parceiro ideal no mundo da tecnologia!"

const FAVICON_SOURCE = "https://tecnodog.vercel.app/favicon.ico"

const POSTFIX_TITLE = " - Blog"

function Helmet({
  title,
  description,
  link,
  keywords = MAIN_KEYWORDS,
  imageCard,
  largeTwitterCard = false,
  addPostfixTitle = false,
  noIndex = false,
  children = null,
}) {
  let metaTitle

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE
  } else {
    metaTitle = title
  }

  const metaDesc = description ?? DEFAULT_DESCRIPTION
  const metaLink = DOMAIN + link

  const metaKeywords = keywords.length
    ? MAIN_KEYWORDS + ", " + keywords
    : MAIN_KEYWORDS

  let metaImageCard

  if (imageCard) {
    if (imageCard.startsWith("https")) {
      metaImageCard = imageCard
    } else {
      metaImageCard = DOMAIN + imageCard
    }
  } else {
    metaImageCard = DEFAULT_IMAGE_CARD
  }

  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow"

  const twitterCardType = largeTwitterCard ? "summary_large_image" : "summary"

  return (
    <Head>
      <html lang="pt-pt" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={metaLink} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />
      <link rel="icon" content={FAVICON_SOURCE} />

      {/* OG Tags */}
      {/* https://ogp.me/ */}
      <meta property="og:url" content={metaLink} />
      <meta property="og:site_name" content="Tecnodog" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="..." />
      <meta property="og:image" content={metaImageCard} />

      {/* Twitter tags */}
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started */}
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:card" content={twitterCardType} />
      <meta property="twitter:image" content={metaImageCard} />

      {/* https://moz.com/blog/meta-referrer-tag */}
      <meta name="referrer" content="origin-when-crossorigin" />

      {children}
    </Head>
  )
}

Helmet.defaultProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  imageCard: DEFAULT_IMAGE_CARD,
  largeTwitterCard: false,
  addPostfixTitle: false,
  noIndex: false,
  children: null,
  keywords: "",
}

Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  imageCard: PropTypes.string,
  largeTwitterCard: PropTypes.bool,
  addPostfixTitle: PropTypes.bool,
  noIndex: PropTypes.bool,
  children: PropTypes.node,
}

export default Helmet
