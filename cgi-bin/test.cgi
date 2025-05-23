#!/usr/bin/perl -w
use strict;
use CGI;
my $cgi=CGI->new();
print $cgi->header();
print $cgi->h1("Hallo Welt");
