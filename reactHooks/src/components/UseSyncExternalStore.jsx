// useSyncExternalStore hook

import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { getState, subscribe, fetchPokemon } from './pokemonStore';

const UseSyncExternalStoreExample = () => {
    const { pokemons } = useSyncExternalStore(subscribe, getState);

    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div className="container mx-auto mt-5">
            <div className="card">
                <h2 className="card-header mb-2">Pokemon List</h2>
                <ul>
                    {pokemons.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default UseSyncExternalStoreExample;