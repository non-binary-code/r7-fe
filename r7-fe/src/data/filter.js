const category = [
	{ label: 'Furniture', value: 'furniture' },
	{ label: 'Electrical', value: 'electrical' },
	{ label: 'Clothing', value: 'cothing' },
];

const condition = [
	{ label: 'Brand New', value: 'brand new' },
	{ label: 'Like New', value: 'like new' },
	{ label: 'Used - Good Condition', value: 'good condition' },
	{
		label: 'Used - Satisfactory Condition',
		value: 'satisfactory condition',
	},
	{ label: 'Needs Upcycling', value: 'upcycle' },
	{ label: 'Needs Repair', value: 'repair' },
];

const delivery = [
	{ label: 'Delivery', value: 'delivery' },
	{ label: 'Collection', value: 'collection' },
	{ label: 'Postage', value: 'postage' },
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
