import { SYMBOL_O, SYMBOL_X } from "./constants";

function GameSymbol({ symbol }) {
    const getSymbolClassName = (symbol) => {
        if (symbol == SYMBOL_X) return styles['symbol--x'];
        if (symbol == SYMBOL_O) return styles['symbol--o'];
        return '';
    }

    return <span className={`${styles['symbol']} ${getSymbolClassName(symbol)}`}>{symbol}</span>
}