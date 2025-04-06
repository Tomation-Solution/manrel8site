export function extractListItems(html) {
  if (!html) return [];
  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Get all <li> elements
  const listItems = tempDiv.querySelectorAll("li");

  // Map them into an array of text content
  return Array.from(listItems).map((item) => item.textContent.trim());
}
