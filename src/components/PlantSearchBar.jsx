import React from "react";
import { Input, Button, Container, Flex } from "@mantine/core";

function PlantSearchBar({ search, setSearch }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Container mt={120}>
        <Flex
          style={{ display: "flex", justifyContent: "center" }}
          direction={{ base: "column", sm: "row" }}
          gap="sm"
          align="center"
        >
          <Input
            placeholder="Search"
            value={search}
            type="text"
            onChange={handleChange}
            radius="xl"
          />
          <Button size="xs" radius="xl" color='green.8'>
            Search
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default PlantSearchBar;
