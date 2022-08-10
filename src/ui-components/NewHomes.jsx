/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { MedicalInformation } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Homecard from "./Homecard";
import { Collection } from "@aws-amplify/ui-react";
export default function NewHomes(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: MedicalInformation,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "NewHomes")}
    >
      {(item, index) => (
        <Homecard
          MI={item}
          height="auto"
          width="auto"
          margin="10px 10px 10px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Homecard>
      )}
    </Collection>
  );
}
