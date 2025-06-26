import React from 'react';

import YoutubeLogo from '../assets/Youtube.png';
import OracleLogo from '../assets/Oracle.png';
import GoogleLogo from '../assets/Google.png';
import MetaLogo from '../assets/Meta.png';
import NetflixLogo from '../assets/Netflix.png';
import WalmartLogo from '../assets/Walmart.png';

const companies = [
  { name: 'YouTube', logo: YoutubeLogo },
  { name: 'Oracle', logo: OracleLogo },
  { name: 'Google', logo: GoogleLogo },
  { name: 'Meta', logo: MetaLogo },
  { name: 'Netflix', logo: NetflixLogo },
  { name: 'Walmart', logo: WalmartLogo },
];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Trusted By Top Companies</h2>
      <div className="flex justify-center flex-wrap gap-10 items-center">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={company.name}
            className="h-22 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
