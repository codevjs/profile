import React from 'react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import {Icon} from "@iconify/react";
import tailwindcssIcon from "@iconify/icons-logos/ant-design";
import reactIcon from "@iconify/icons-logos/react";

const Text = () => (
  <>
    Saat ini saya sedang bekerja sebagai{' '}
    <span className="font-bold text-gray-800">fullstack web developer</span> di WASDLabs, saya sangat suka menggunakan
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
     Saya juga seorang mahasiswa di Stmik Kharisma Makassar.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
