const Footer = () => {
  return (
    <footer className="text-xs text-center p-6 primary-text">
      <div>
        Username &copy; {new Date().getFullYear()}
      </div>
      <div>Powered by Notion, Next.js & Vercel.</div>
    </footer>
  )
}

export default Footer
