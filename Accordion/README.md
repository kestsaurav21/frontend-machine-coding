# Frontend Machine Coding Challenge Series

Welcome to the Frontend Machine Coding Challenge Series! This repository contains a series of frontend challenges aimed at building essential components and improving problem-solving skills in frontend development.

## Challenge 1: Accordion Component

### Overview
In this challenge, we are building a fully functional Accordion component . The Accordion should render sections that expand and collapse to show or hide their respective content. We are given mock data to use for creating each accordion item.

### Features
1. **Expandable Sections**: Each section of the accordion can be expanded or collapsed.
2. **Dynamic Data Rendering**: The accordion uses mock data to display section titles and content.
3. **Only One Open Section at a Time**: When a section is expanded, any other open section should close.
4. **Smooth Transitions**: Expand and collapse animations for a better user experience.

### Mock Data Format
The mock data provided for this challenge will look like this:

```javascript
const data = [
    {
      id  : '1',
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id  : '2',
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id  : '3',
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id  : '4',
      question: "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

