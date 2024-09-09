import React, { useState } from "react";
import {
  Card,
  Button,
  TextField,
  InlineStack,
  BlockStack,
  ButtonGroup,
  ResourceList,
  Text,
} from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";

const ProductSelector = () => {
  const [products, setProducts] = useState([{ id: 1, name: "Select Product" }]);

  const handleAddProduct = () => {
    const newId = products.length + 1;
    setProducts([...products, { id: newId, name: "Select Product" }]);
  };

  const handleProductChange = (id, newName) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, name: newName } : p))
    );
  };

  return (
    <Card>
      <Card.Section>
        <InlineStack alignment="center" blockAlign="center">
          <Text variant="bodyMd">Product</Text>
          <Text variant="bodyMd">Discount</Text>
        </InlineStack>
      </Card.Section>
      <Card.Section>
        <ResourceList
          items={products}
          renderItem={(item) => (
            <ResourceList.Item id={item.id}>
              <InlineStack blockAlign="center" alignment="fill">
                <BlockStack>
                  <TextField
                    label="Product"
                    value={item.name}
                    onChange={(value) => handleProductChange(item.id, value)}
                    labelHidden
                    connectedRight={
                      <Button
                        icon={EditIcon}
                        onClick={() => {}}
                        accessibilityLabel="Edit product"
                      />
                    }
                  />
                </BlockStack>
                <BlockStack>
                  <Button primary>Add Discount</Button>
                </BlockStack>
              </InlineStack>
            </ResourceList.Item>
          )}
        />
      </Card.Section>
      <Card.Section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button outline onClick={handleAddProduct}>
            Add Product
          </Button>
        </div>
      </Card.Section>
    </Card>
  );
};

export default ProductSelector;
