import React, { useEffect, useState } from 'react';
import { SelectInput } from 'sanity';
import { client } from '../sanity.config';

const CustomInternalBlogLink = ({ ...props }) => {
  const [slugOptions, setSlugOptions] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blog_entries"].slug';
    client.fetch(query).then((slugs) => {
      const list = slugs.map((item, i) => ({
        _key: i,
        title: item.current,
        value: item.current,
      }));
      setSlugOptions(list);
    });
  }, []);

  return (
    <SelectInput options={{ list: slugOptions }} {...props} />
  );
};

export default CustomInternalBlogLink;
