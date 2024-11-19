import React, { useState } from 'react';
import './page.css';
import SearchBar from '../components/Search';
import CardComponent from '../components/Card';

const Git = () => {
    // Sample data for cards
    const cardData = [
        {
            id: 1,
            title: "Title 1",
            command: "Command 1",
            description: "Description for card 1",
            scenario: "pull",
        },
        {
            id: 2,
            title: "Title 2",
            command: "Command 2",
            description: "Description for card 2",
            scenario: "Scenario 2",
        },
        {
            id: 3,
            title: "Title 3",
            command: "Command 3",
            description: "Description for card 3",
            scenario: "Scenario 3",
        },
        {
            id: 4,
            title: "Title 4",
            command: "Command 4",
            description: "Description for card 4",
            scenario: "Scenario 4",
        },
    ];

    // State for search query
    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle search input change
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    // Filter cards based on the search query
    const filteredCards = cardData.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.scenario.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="body">
            <SearchBar onSearchChange={handleSearchChange} />
            <div className="card-grid">
                {filteredCards.map((card) => (
                    <CardComponent
                        key={card.id}
                        title={card.title}
                        command={card.command}
                        description={card.description}
                        scenario={card.scenario}
                    />
                ))}
            </div>
        </div>
    );
};

export default Git;
