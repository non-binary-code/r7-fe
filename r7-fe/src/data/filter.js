const category = [
  { label: 'Furniture', value: 'category', catId: 1 },
  { label: 'Electrical', value: 'category', catId: 2 },
  { label: 'Clothing', value: 'category', catId: 3 },
];

const condition = [
  { label: 'Brand New', value: 'condition', conId: 1 },
  { label: 'Like New', value: 'condition', conId: 2 },
  { label: 'Used - Good Condition', value: 'condition', conId: 3 },
  {
    label: 'Used - Satisfactory Condition',
    value: 'condition',
    conId: 4,
  },
  { label: 'Needs Upcycling', value: 'condition', conId: 5 },
  // { label: 'Needs Repair', value: 'condition', conId: 6 },
];

const delivery = [
  { label: 'Delivery', value: 'delivery' },
  { label: 'Collection', value: 'collection' },
  { label: 'Postage', value: 'postage' },
  { label: 'Recover', value: 'recover' },
];

export const groupedFilters = [
  {
    label: 'Category',
    options: category,
  },
  {
    label: 'Condition',
    options: condition,
  },
  {
    label: 'Delivery',
    options: delivery,
  },
];
