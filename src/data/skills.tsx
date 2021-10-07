import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressjsIcon from '@iconify/icons-logos/express';
import antdIcon from '@iconify/icons-logos/ant-design';
import jsIcon from '@iconify/icons-logos/javascript';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import dockerIcon from '@iconify/icons-logos/docker-icon';

const skills = [
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a href="https://nodejs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={nodejsIcon} />
  </a>,
  <a href="https://expressjs.com" className="focus:outline-none">
    <Icon className="text-6xl" icon={expressjsIcon} />
  </a>,
  <a href="https://ant.design" className="focus:outline-none">
    <Icon className="text-5xl" icon={antdIcon} />
  </a>,
  <a href="https://www.javascript.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={jsIcon} />
  </a>,
  <a href="https://nextjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={nextjsIcon} />
  </a>,
  <a href="https://www.docker.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={dockerIcon} />
  </a>,
];

export default skills;
