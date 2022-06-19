import siteMetadata from '@/data/siteMetadata';

const formatDate = (date) => {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	const s = 'ss';
	const [year, month, day] = date.split('T')[0].split('-');
	return `${day}/${month}/${year}`;
};

export default formatDate;
