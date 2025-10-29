import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DialogDemo from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: DialogDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    modal: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    onOpenChange: fn(),
  },
} satisfies Meta<typeof DialogDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Edit profile',
    description: 'Make changes to your profile here. Click save when you\'re done.',
    children: (
      <>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <button className="Button green">Save changes</button>
        </div>
      </>
    ),
  },
};

export const Simple: Story = {
  args: {
    title: 'Confirmation',
    description: 'Are you sure you want to continue?',
    children: (
      <div style={{ display: 'flex', gap: 10, marginTop: 25, justifyContent: 'flex-end' }}>
        <button className="Button">Cancel</button>
        <button className="Button green">Confirm</button>
      </div>
    ),
  },
};

export const NoDescription: Story = {
  args: {
    title: 'Simple Dialog',
    children: (
      <div>
        <p>This dialog has no description, only a title.</p>
        <button className="Button violet" style={{ marginTop: 20 }}>
          Got it
        </button>
      </div>
    ),
  },
};

export const NonModal: Story = {
  args: {
    modal: false,
    title: 'Non-Modal Dialog',
    description: 'This dialog doesn\'t trap focus and allows interaction with the page behind it.',
    children: (
      <div>
        <p>You can interact with elements outside this dialog.</p>
      </div>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Custom Content',
    description: 'You can put any content inside the dialog.',
    children: (
      <div>
        <ul style={{ marginTop: 15, paddingLeft: 20 }}>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <button className="Button violet" style={{ marginTop: 20 }}>
          Close
        </button>
      </div>
    ),
  },
};
