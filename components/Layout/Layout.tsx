import { ReactNode } from 'react';

import Footer from './Footer';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
