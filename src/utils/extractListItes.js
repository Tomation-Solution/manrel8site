export function extractListItems(html) {
  if (!html) return [];
  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Get all <li> elements
  const listItems = tempDiv.querySelectorAll("li");

  // Map them into an array of text content
  const itemsArray = Array.from(listItems).map((li) => li.innerHTML);
  return itemsArray.length > 0 ? itemsArray : [html]; // Return the array or the original HTML if no <li> found
}
