import { StaticImageData } from 'next/image';

import enartiaLogo from '../public/sponsors/EnartiaLogo.png';
import pancretaLogo from '../public/sponsors/Logo_Pancreta.png';
import oxygenLogo from '../public/sponsors/Oxygen-logo.png';
import vodafoneLogo from '../public/sponsors/Vodafone-logo.png';
import webtrailsLogo from '../public/sponsors/Webtrails_logo.png';
import advantageLogo from '../public/sponsors/advantage_fse.png';
import bestpriceLogo from '../public/sponsors/bestprice.png';
import cyberlogicLogo from '../public/sponsors/cyberlogic_logo.png';
import fairloLogo from '../public/sponsors/fairlo_logo.png';
import forthLogo from '../public/sponsors/forth_logo.png';
import jetbrainsLogo from '../public/sponsors/jetbrains.png';
import micmei from '../public/sponsors/micmei.png';
import office12Logo from '../public/sponsors/office12_logo.png';
import phatwebLogo from '../public/sponsors/phatweb-logo.png';
import stepCLogo from '../public/sponsors/stepc_logo.jpeg';
import sunlightLogo from '../public/sponsors/sunlight-logo.png';
import telestriderLogo from '../public/sponsors/telestrider.png';
import uocLogo from '../public/sponsors/uoc_logo.png';
import yodeckLogo from '../public/sponsors/yodeck.png';
import epignosisLogo from '../public/sponsors/epignosis-logo.png';
import netcompanyLogo from '../public/sponsors/netcompany.png';
import tourmieLogo from '../public/sponsors/Tourmie-logo.png';
import otsLogo from '../public/sponsors/OTS_logo_black.png';
import domebaLogo from '../public/sponsors/domeba.png';
import zarosLogo from '../public/sponsors/zaros.png';
import cytechLogo from '../public/sponsors/cytech-logo.png';

type Sponsor = {
  title: string;
  image: StaticImageData;
  website: string;
  facebookUrl: string;
  linkedInUrl: string;
};

export const sponsors: Sponsor[] = [
  {
    title: "ZARO'S",
    image: zarosLogo,
    website: 'https://www.zaroswater.gr/',
    facebookUrl: 'https://www.facebook.com/Zaroswater',
    linkedInUrl: 'https://www.linkedin.com/company/zaros-water/'
  },
  {
    title: 'cytech',
    image: cytechLogo,
    website: 'https://www.cytechmobile.com/',
    facebookUrl: 'https://www.facebook.com/cytech.gr/',
    linkedInUrl: 'https://www.linkedin.com/company/cytech-ltd/'
  },
  {
    title: 'domeba',
    image: domebaLogo,
    website: 'https://www.domeba.com/en/',
    facebookUrl: 'https://www.facebook.com/domebateam/',
    linkedInUrl: 'https://www.linkedin.com/company/domeba-gmbh/'
  },
  {
    title: 'OTS',
    image: otsLogo,
    website: 'https://ots.gr',
    facebookUrl: 'https://www.facebook.com/OTS.GR',
    linkedInUrl: 'https://www.linkedin.com/company/ots-sa'
  },
  {
    title: 'Tourmie',
    image: tourmieLogo,
    website: 'https://tourmie.com',
    facebookUrl: 'https://www.facebook.com/tourmieapp',
    linkedInUrl: 'https://www.linkedin.com/company/tourmie'
  },
  {
    title: 'Netcompany-Intrasoft',
    image: netcompanyLogo,
    website: 'https://www.netcompany-intrasoft.com/',
    facebookUrl: 'https://www.facebook.com/netcompanyintrasoft/',
    linkedInUrl: 'https://www.linkedin.com/company/netcompany-intrasoft-sa/'
  },
  {
    title: 'Epignosis',
    image: epignosisLogo,
    website: 'https://www.epignosishq.com/',
    facebookUrl: 'https://www.facebook.com/epignosishq/',
    linkedInUrl: 'https://www.linkedin.com/company/epignosis-ltd/'
  },
  {
    title: 'Yodeck',
    image: yodeckLogo,
    website: 'https://www.yodeck.com/',
    facebookUrl: 'https://www.facebook.com/yodeck.digital.signage/',
    linkedInUrl: 'https://www.linkedin.com/showcase/yodeck/'
  },
  {
    title: 'Fairlo',
    image: fairloLogo,
    website: 'https://fairlo.se/',
    facebookUrl: 'https://el-gr.facebook.com/fairlo.se/',
    linkedInUrl: 'https://www.linkedin.com/company/fairlo/'
  },
  {
    title: 'Step-C',
    image: stepCLogo,
    website: 'https://www.stepc.gr',
    facebookUrl: 'https://el-gr.facebook.com/STEPCRETE/',
    linkedInUrl: 'https://www.linkedin.com/company/science-and-technology-park'
  },
  {
    title: 'JetBrains',
    image: jetbrainsLogo,
    website: 'https://www.jetbrains.com/',
    facebookUrl: 'https://www.facebook.com/JetBrains/',
    linkedInUrl: 'https://www.linkedin.com/company/jetbrains/'
  },
  {
    title: 'Oxygen Pelatologio',
    image: oxygenLogo,
    website: 'https://www.oxygen.gr/',
    facebookUrl: 'https://facebook.com/pelatologio/',
    linkedInUrl: 'https://www.linkedin.com/company/pelatologio/'
  },
  {
    title: 'Vodafone Greece',
    image: vodafoneLogo,
    website: 'https://www.vodafone.gr/',
    facebookUrl: 'https://www.facebook.com/vodafonegreece/',
    linkedInUrl: 'https://www.linkedin.com/company/vodafone/'
  },
  {
    title: 'Advantage FSE',
    image: advantageLogo,
    website: 'https://www.afse.eu/',
    facebookUrl: 'https://www.facebook.com/AdvantageFSE/',
    linkedInUrl: 'https://www.linkedin.com/company/advantage-fse/'
  },
  {
    title: 'BestPrice',
    image: bestpriceLogo,
    website: 'https://www.bestprice.gr/',
    facebookUrl: 'https://el-gr.facebook.com/bestprice.gr',
    linkedInUrl: 'https://www.linkedin.com/company/bestprice-gr/'
  },
  {
    title: 'Michael Meimaroglou Creative Studio',
    image: micmei,
    website: 'https://www.micmei.gr/',
    facebookUrl: 'https://www.facebook.com/micmeicreativestudio',
    linkedInUrl: 'https://www.linkedin.com/company/michael-meimaroglou-creative-studio/'
  },

  {
    title: 'Telestrider',
    image: telestriderLogo,
    website: 'https://telestrider.com/',
    facebookUrl: 'https://www.facebook.com/telestrider',
    linkedInUrl: 'https://www.linkedin.com/company/telestrider/'
  },
  {
    title: 'Enartia',
    image: enartiaLogo,
    website: 'https://www.enartia.com/',
    facebookUrl: 'https://el-gr.facebook.com/EnartiaVenue/',
    linkedInUrl: 'https://www.linkedin.com/company/usableweb-ltd/'
  },
  {
    title: 'Pancreta Cooperative Bank',
    image: pancretaLogo,
    website: 'http://www.pancretabank.gr/',
    facebookUrl:
      'https://www.facebook.com/pages/%CE%A0%CE%91%CE%93%CE%9A%CE%A1%CE%97%CE%A4%CE%99%CE%91-%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91PANCRETA-BANK/139122389454549',
    linkedInUrl: 'https://www.linkedin.com/company/pancretabank/'
  },
  {
    title: 'Webtrails',
    image: webtrailsLogo,
    website: 'https://webtrails.gr/',
    facebookUrl: 'https://www.facebook.com/webtrails.gr/',
    linkedInUrl: 'https://www.linkedin.com/company/webtrails/'
  },
  {
    title: 'Office 12',
    image: office12Logo,
    website: 'https://office12.gr/',
    facebookUrl: 'https://www.facebook.com/office12.gr',
    linkedInUrl: 'https://www.linkedin.com/company/office_12-the-coworking-office/'
  },
  {
    title: 'Phatweb',
    image: phatwebLogo,
    website: 'https://phatweb.gr/',
    facebookUrl: 'https://www.facebook.com/phatweb.gr/',
    linkedInUrl: ''
  },
  {
    title: 'Sunlight',
    image: sunlightLogo,
    website: 'https://www.sunlight.io/',
    facebookUrl: 'https://www.facebook.com/Sunlightio-236110340385376/',
    linkedInUrl: 'https://www.linkedin.com/company/sunlight-io'
  },
  {
    title: 'CyberLogic',
    image: cyberlogicLogo,
    website: 'http://www.cyberlogic.gr/en/home/',
    facebookUrl: 'https://www.facebook.com/Cyberlogic.gr/',
    linkedInUrl: 'https://www.linkedin.com/company/cyberlogic-oe/'
  },
  {
    title: 'FORTH',
    image: forthLogo,
    website: 'https://www.forth.gr/',
    facebookUrl: 'https://www.facebook.com/FORTH.ITE/',
    linkedInUrl: 'https://gr.linkedin.com/company/foundation-for-research-&-technology-hellas-forth-'
  },
  {
    title: 'CSD-UOC',
    image: uocLogo,
    website: 'https://www.csd.uoc.gr/CSD/index.jsp',
    facebookUrl: 'https://el-gr.facebook.com/csd.uoc.gr/',
    linkedInUrl: 'https://gr.linkedin.com/school/uoc-csd/'
  }
];
