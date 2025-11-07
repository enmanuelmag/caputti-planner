import { Accordion } from 'webcoreui/react';

type FAQProps = {
  items: Array<{
    title: string;
    content: string;
  }>;
};

const FAQ = (props: FAQProps) => {
  const { items } = props;

  return <Accordion className="accordion-list" items={items} />;
};

export default FAQ;
