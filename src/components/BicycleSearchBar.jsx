import React from "react";
import { Input, Button, Container, Flex } from "@mantine/core";

function bicycleSearchBar({search , setSearch}) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <label>Search</label>

      <Container mt={120}>
        <Flex direction={{ base: "column", sm: "row" }} gap="sm" align="center">
          <Input
            placeholder="Search"
            value={search}
            type="text"
            onChange={handleChange}
            radius="xl"
          />
          <Button size="xs" radius="xl">
            Search
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default bicycleSearchBar;
