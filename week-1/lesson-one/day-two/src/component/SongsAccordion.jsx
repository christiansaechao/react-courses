import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


function SongsAccordion() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Gimmie job pls

        </AccordionSummary>

        <AccordionDetails>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, laudantium. Facere, recusandae. Quis autem molestias, soluta voluptas voluptatibus porro necessitatibus dolores? Quam neque debitis recusandae, a necessitatibus fuga quidem saepe!
        </AccordionDetails>

        <AccordionDetails>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis eum nesciunt nemo veniam quo est deleniti, eius debitis eveniet, obcaecati, deserunt ducimus possimus porro illum saepe error voluptates necessitatibus.
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default SongsAccordion;
