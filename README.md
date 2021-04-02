# react-minimal-setup
React JS project boilerplate code


There are three primary category of components in React Router:
* routers like <BrowserRouter> and <HashRouter>
* route matchers, like <Route> and <Switch>
* and navigation, like <Link>, <NavLink>, and <Redirect>



When a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that <Route> and ignores all others. 
If no <Route> matches, the <Switch> renders nothing (null).

* <Route path> matches the beginning of the URL, not the whole thing. So a <Route path="/"> will always match the URL.


* The <NavLink> is a special type of <Link> that can style itself as "active" when its `to` prop matches the current location.

* Any time you want to force navigation, you can use <Redirect>