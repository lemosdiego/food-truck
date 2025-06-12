import "./globals.css";

export const metadata = {
  title: "Ham-Burguer | Food Truck",
  description:
    "Landing page do Ham-Burguer, o food truck mais saboroso da cidade! Confira nossos lanches tops e peça já o seu!",
  keywords: [
    "hambúrguer",
    "food truck",
    "lanche",
    "comida de rua",
    "delivery",
    "fast food",
  ],
  authors: [{ name: "Washington Lemos" }],
  creator: "Washington Lemos",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ham-Burguer | Food Truck",
    description:
      "Conheça os melhores hambúrgueres artesanais direto do nosso food truck!",
    url: "https://food-truck-blond.vercel.app/burguer",
    siteName: "Ham-Burguer",
    images: [
      {
        url: "https://res.cloudinary.com/dkrpmbjml/image/upload/v1749311401/cozinha_sussoc.png",
        width: 800,
        height: 600,
        alt: "Imagem do Food Truck Ham-Burguer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
