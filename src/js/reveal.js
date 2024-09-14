// RevealJS
import Reveal from 'reveal.js/dist/reveal.esm';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm';

// Styles
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import '../css/reveal.css';

let deck = new Reveal({
    hash: true,
    center: true,
    plugins: [Highlight],
});

deck.initialize();