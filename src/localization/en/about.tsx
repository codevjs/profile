import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/ant-design';

const Text = () => (
  <>
    I’m currently working as a {' '}
    <span className="font-bold text-gray-800">fullstack web developer</span> at WASDLabs. I enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://ant.design/"
      className="mx-2"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      Ant Design
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    I'm also an active student in Stmik Kharisma Makassar.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
