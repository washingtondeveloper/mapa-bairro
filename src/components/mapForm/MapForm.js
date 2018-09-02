import React from 'react';
import './MapForm.css';

/**
 * @description Formulario de filtro
 * @method MapForm
 */
export default ({ updateQuery }) => (
    <form>
        <input type="text" placeholder="Filtro..." onChange={event => updateQuery(event.target.value)} />
    </form>
);