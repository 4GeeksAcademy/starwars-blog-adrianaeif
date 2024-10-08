const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [

			],

			planets: [

			],

			vehicles: [

			],

			favorites: [

			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({characters:data.results}))
				.catch(err => console.error(err))
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => setStore({planets:data.results}))
				.catch(err => console.error(err))
			},

			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => setStore({vehicles:data.results}))
				.catch(err => console.error(err))
			},

			addFavoriteCharacter: (peopleName) => {
				console.log(peopleName)
				const store = getStore();
				if( ! store.favorites.includes(peopleName)){
					setStore({ favorites: [ ...store.favorites, peopleName ] })
				}
			},

			removeFavorites: (peopleName) => {
				const store = getStore();
				setStore({favorites: store.favorites.filter(name => name != peopleName)})
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
