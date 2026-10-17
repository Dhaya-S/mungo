import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutPage from './About.jsx'
import Home from './Home.jsx'
import AllArticles from './AllArticles.jsx'
import Blog from './Blog.jsx'
import BlogDetails from './BlogDetails.jsx'
import Careers from './Careers.jsx'
import CareersOpenRoles from './CareersOpenRoles.jsx'
import CareersDetails from './CareersDetails.jsx'
import CareersApply from './CareersApply.jsx'
import Contact from './Contact.jsx'
import Grooming from './PetGrooming.jsx'
import VeterinaryCare from './PetVetCare.jsx'
import PetSitting from './PetSitting.jsx'
import DogWalking from './PetWalking.jsx'
import PetBoarding from './Petboarding.jsx'
import BecomeGroomer from './BecomeGroomer.jsx'
import BecomeVet from './BecomeVet.jsx'
import BecomeSitter from './BecomeSitter.jsx'
import BecomeWalker from './BecomeWalker.jsx'
import BecomeBoarder from './BecomeBoarder.jsx'
import HelpCentre from './HelpCentre.jsx'
import PetParentHelp from './PetParentHelp.jsx'
import MungoSEOTool from './MungoSEOTool.jsx'
import Partners from './Partners.jsx'
import Privacy from './Privacy.jsx'
import Terms from './Terms.jsx'
import NotFound from './NotFound.jsx'
import ArticleNotFound from './ArticleNotFound.jsx'
import InvestorRelations from './InvestorsRelations.jsx'
import AdvertiseWithMungo from './AdvertiseWithMungo.jsx'
import './index.css'

const pages = {
  '/': Home,
  '/index': Home,
  '/features': Home,
  '/about': AboutPage,
  '/advertise-with-mungo': AdvertiseWithMungo,
  '/blog': Blog,
  '/blog-details': BlogDetails,
  '/careers': Careers,
  '/careers/roles': CareersOpenRoles,
  '/careers/details': CareersDetails,
  '/careers/apply': CareersApply,
  '/contact': Contact,
  '/grooming': Grooming,
  '/veterinary-care': VeterinaryCare,
  '/pet-boarding': PetBoarding,
  '/pet-sitting': PetSitting,
  '/dog-walking': DogWalking,
  '/become-groomer': BecomeGroomer,
  '/become-vet': BecomeVet,
  '/become-sitter': BecomeSitter,
  '/become-walker': BecomeWalker,
  '/become-boarder': BecomeBoarder,
  '/become-boarding': BecomeBoarder,
  '/help': HelpCentre,
  '/pet-parent-help': PetParentHelp,
  '/partners': Partners,
  '/partners/apply': Partners,
  '/privacy': Privacy,
  '/seo': MungoSEOTool,
  '/terms': Terms,
  '/articles': AllArticles,
  '/investor-relations': InvestorRelations,
}

const pageTitles = {
  '/': 'Mungo – Better Care, Happier Pets, Stronger Bond',
  '/about': 'About Mungo – Our Mission for Better Pet Care',
  '/advertise-with-mungo': 'Advertise With Mungo',
  '/blog': 'Mungo Blog – Pet Care Tips, Guides & News',
  '/blog-details': 'Article – Mungo Blog',
  '/careers': 'Careers at Mungo – Join Our Pet Care Team',
  '/careers/roles': 'Open Roles at Mungo',
  '/careers/details': 'Senior Product Designer – Careers at Mungo',
  '/careers/apply': 'Apply for a Role at Mungo',
  '/contact': 'Contact Mungo – Support & Enquiries',
  '/grooming': 'Pet Grooming | Mungo',
  '/veterinary-care': 'Veterinary Care | Mungo',
  '/pet-boarding': 'Pet Boarding | Mungo',
  '/pet-sitting': 'Pet Sitting | Mungo',
  '/dog-walking': 'Dog Walking | Mungo',
  '/become-groomer': 'Become a Groomer | Mungo',
  '/become-vet': 'Become a Veterinary Partner | Mungo',
  '/become-sitter': 'Become a Pet Sitter | Mungo',
  '/become-walker': 'Become a Dog Walker | Mungo',
  '/become-boarder': 'Become a Pet Boarder | Mungo',
  '/become-boarding': 'Become a Pet Boarder | Mungo',
  '/help': 'Help Centre – Mungo',
  '/pet-parent-help': 'Pet Parent Help – Mungo',
  '/partners': 'Become a Mungo Partner – List Your Pet Care Business',
  '/privacy': 'Privacy Policy – How We Protect Your Data | Mungo',
  '/seo': 'Mungo – SEO Meta Tags & Alt Text Tool',
  '/terms': 'Terms of Service – Legal Guidelines | Mungo',
  '/investor-relations': 'Investor Relations | Mungo',
}

const normalizeRoutePath = (path) => {
  const decodedPath = decodeURIComponent(path)
  const trimmedPath = decodedPath.replace(/\/+$/, '') || '/'
  const withoutHtml = trimmedPath.replace(/\/index\.html$/i, '/').replace(/\.html$/i, '') || '/'
  return withoutHtml.replace(/\/+$/, '') || '/'
}

const pathname = decodeURIComponent(window.location.pathname)
const normalizedPath = normalizeRoutePath(pathname)

if (pathname !== normalizedPath) {
  const nextUrl = `${normalizedPath}${window.location.search}${window.location.hash}`
  window.history.replaceState({}, '', nextUrl)
}

const pagePath = normalizedPath.toLowerCase()
const root = document.getElementById('root')
const Page = pages[pagePath] || (pagePath.startsWith('/help/') ? ArticleNotFound : NotFound)

document.title =
  pageTitles[pagePath] ||
  (Page === ArticleNotFound
    ? 'Article Not Found | Mungo'
    : Page === NotFound
      ? 'Page Not Found | Mungo'
      : pageTitles['/'])

const canonical = document.querySelector('link[rel="canonical"]')
if (canonical) {
  canonical.href = `https://mungo.app${pagePath === '/' ? '/' : pagePath}`
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
