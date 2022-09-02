import { ComponentTypes } from '@/services/notion/types/component.types'
import { ComponentMapping } from '@/services/notion/mapping'
import Default from '@/components/notion/dynamic/Default'

type DetermineComponentParams = {
  template: ComponentTypes | undefined;
};

/**
 * React hook which determines the component by a template name and returns it
 * directly with the correct params and child components
 *
 * @param template
 */
export function useDetermineComponent({ template }: DetermineComponentParams) {
  if (template) {
    const Component = ComponentMapping[template];

    if (typeof Component !== 'undefined') {
      return { Component };
    }
  }

  return {
    Component: Default
  };
}

