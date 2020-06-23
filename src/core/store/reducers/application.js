const initialState = {
  title: 'Rakuten TV',
  initialLists: [
    'populares-en-taquilla',
    'estrenos-para-toda-la-familia',
    'estrenos-imprescindibles-en-taquilla',
    'estrenos-espanoles',
    'si-te-perdiste',
    // 'especial-x-men', // uncomment to provoke failure on home page
    'nuestras-preferidas-de-la-semana',
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}
