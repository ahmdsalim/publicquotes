module.exports = {
	publicPath: proccess.env.NODE_ENV === 'production'

	? '/publicquotes/'

	: '/'
}