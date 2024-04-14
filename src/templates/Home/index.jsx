/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../../components/Loading';
import { GridTwoColum } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/api/pages/?filters[slug]=teste-1&populate=deep');
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };
    load();
  }, []);

  if (data === undefined) return <PageNotFound />;
  if (data && !data.slug) return <Loading />;

  const { menu, sections, footerHtml } = data;
  const { links, text, link, srcImg } = menu;
  console.log(data);

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      <h1>Olá mundo</h1>
      {sections.map((section, index) => {
        const { component } = section;

        if (component === 'section.section-two-columns') {
          return <GridTwoColum {...section} key={index} />;
        }
        if (component === 'section.section-content') {
          return <GridContent {...section} key={index} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={index} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={index} />;
        }
      })}
    </Base>
  );
}

export default Home;
