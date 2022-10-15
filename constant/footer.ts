type Item = {
  name: string
  link: string
  icon?: string
}

type Items = {
  title: string
  items: Item[]
}

export const footer: Items[] = [
  {
    title: 'Fine A Store',
    items: [
      {
        name: 'BECOME A MEMBER',
        link: '/',
      },
      {
        name: 'SIGN UP FOR EMAIL',
        link: '/',
      },
      {
        name: 'STUDENT DISCOUNTS',
        link: '/',
      },
      {
        name: 'SEND US FEEDBACK',
        link: '/',
      },
    ],
  },
  {
    title: 'Get Help',
    items: [
      {
        name: 'Order Status',
        link: '/',
      },
      {
        name: 'Delivery',
        link: '/',
      },
      {
        name: 'Refunds',
        link: '/',
      },
      {
        name: 'Payment Options',
        link: '/',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        name: 'News',
        link: '/',
      },
      {
        name: 'Refunds',
        link: '/',
      },
      {
        name: 'Sustainability',
        link: '/',
      },
    ],
  },
]

export const socialMedia: Item[] = [
  {
    name: 'Twitter',
    link: '/',
    icon: 'Twitter',
  },
  {
    name: 'Facebook',
    link: '/',
    icon: 'Facebook',
  },
  {
    name: 'Youtube',
    link: '/',
    icon: 'Youtube',
  },
  {
    name: 'Instagram',
    link: '/',
    icon: 'Instagram',
  },
]
