/*package com.patients.patient.filters;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class CsrfLoggerFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(jakarta.servlet.http.HttpServletRequest request, jakarta.servlet.http.HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        CsrfToken csrfToken = (CsrfToken) request.getAttribute("_csrf");
        response.setHeader("CSRF-TOKEN-VALUE", csrfToken.getToken());
        filterChain.doFilter(request,response);

    }
}*/
