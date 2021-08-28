import React from 'react';
import { Github } from './github';
import { Logo } from './logo';

export function Icon(props: React.SVGProps<SVGSVGElement>) {
  switch (props.name?.toLowerCase()) {
    case 'logo':
      return <Logo {...props} />;
    case 'github':
      return <Github {...props} />;
    default:
      return <div>Insira um name válido para carregar um icone</div>;
  }
}
