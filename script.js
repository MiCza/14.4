var movies = [
{	
	id: 1,
	title: 'Harry Potter',
	desc: 'Film o czarodzieju',
	year: 2001,
	director:  'Chris Columbus, Alfonso Cuarón, Mike Newell',
	picture: 'https://www.cosmopolitan.pl/u/ic/W1/u/a/17/07/harry-potter-powraca-dostaniemy-az-dwie-nowe-ksiazki_5970c9e7.jpeg',
},
{	
	id: 2,
	title: 'Król Lew',
	desc: 'Film o królu sawanny',
	year: 1994,
	director: ' Roger Allers, Rob Minkoff',
	picture: 'https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/disney-adventure-lion-king-wall-mural-6651-p.jpg'
},
{	
	id: 3,
	title: 'Scarface',
	desc: 'Kubański emigrant Tony Montana opuszcza ojczyznę i przybywa do Miami.',
	year: 1983,
	director: 'Brian De Palma',
	picture: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/04/Scarface-Al-Pacino-e1461953185446-800x400.jpg'
}
];

var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {}, 
      React.createElement(MovieTitle, {text: this.props.item.title}),
      React.createElement(MovieDescription, {text: this.props.item.desc}),
      React.createElement(MovieImage, {source: this.props.item.picture})
      )
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {}, this.props.text)
  }
})

var MovieTitle = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.text)
  }
})

var MovieImage = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', {src:this.props.source})
  }
})

var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render: function() {
    var moviesElements = this.props.list.map(function(movie) {
      return React.createElement(Movie, {item: movie, key: movie.id});
    });
    return (React.createElement('div', {},
    React.createElement(MovieTitle, {text: 'Lista filmów'}),
    React.createElement('ul', {}, moviesElements))
  );
}});

var element = React.createElement(MovieList, {list: movies});
ReactDOM.render(element, document.getElementById('app'));