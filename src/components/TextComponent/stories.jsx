import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit amet consectetur,
      adipisicing elit.
      Repellendus nihil sequi iure itaque vero corrupti mollitia sit
      laborum porro, iste ducimus, accusantium facere doloribus laboriosam?
      Illo omnis nisi similique suscipit!
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
